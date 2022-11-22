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

func (k Keeper) BaseAuctionAll(c context.Context, req *types.QueryAllBaseAuctionRequest) (*types.QueryAllBaseAuctionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var baseAuctions []types.BaseAuction
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	baseAuctionStore := prefix.NewStore(store, types.KeyPrefix(types.BaseAuctionKeyPrefix))

	pageRes, err := query.Paginate(baseAuctionStore, req.Pagination, func(key []byte, value []byte) error {
		var baseAuction types.BaseAuction
		if err := k.cdc.Unmarshal(value, &baseAuction); err != nil {
			return err
		}

		baseAuctions = append(baseAuctions, baseAuction)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBaseAuctionResponse{BaseAuction: baseAuctions, Pagination: pageRes}, nil
}

func (k Keeper) BaseAuction(c context.Context, req *types.QueryGetBaseAuctionRequest) (*types.QueryGetBaseAuctionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBaseAuction(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBaseAuctionResponse{BaseAuction: val}, nil
}
