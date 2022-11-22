package keeper

import (
	"context"

	"carAuction/x/carauction/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BaseBidAll(c context.Context, req *types.QueryAllBaseBidRequest) (*types.QueryAllBaseBidResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var baseBids []types.BaseBid
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	baseBidStore := prefix.NewStore(store, types.KeyPrefix(types.BaseBidKeyPrefix))

	pageRes, err := query.Paginate(baseBidStore, req.Pagination, func(key []byte, value []byte) error {
		var baseBid types.BaseBid
		if err := k.cdc.Unmarshal(value, &baseBid); err != nil {
			return err
		}

		baseBids = append(baseBids, baseBid)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBaseBidResponse{BaseBid: baseBids, Pagination: pageRes}, nil
}

func (k Keeper) BaseBid(c context.Context, req *types.QueryGetBaseBidRequest) (*types.QueryGetBaseBidResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBaseBid(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBaseBidResponse{BaseBid: val}, nil
}
