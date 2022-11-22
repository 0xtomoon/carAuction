package keeper

import (
	"context"
	"strconv"

	"carAuction/x/carauction/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) PlaceBid(goCtx context.Context, msg *types.MsgPlaceBid) (*types.MsgPlaceBidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	baseAuction, found := k.Keeper.GetBaseAuction(ctx, msg.AuctionId)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrAuctionNotFound, "%s", msg.AuctionId)
	}
	if baseAuction.Ended {
		return nil, sdkerrors.Wrapf(types.ErrAuctionEnded, "%s", "")
	}

	systemInfo, found := k.Keeper.GetSystemInfo(ctx)
	if !found {
		panic("SystemInfo not found")
	}

	bidId := strconv.FormatUint(systemInfo.BidId, 10)
	baseBid := types.BaseBid{
		Index:     	bidId,
		Bidder:    	msg.Creator,
		Amount: 	msg.Amount,
		AuctionId: 	msg.AuctionId,
		BidTime:   	ctx.BlockTime().Unix(),
	}

	err := baseBid.ValidateBid(baseAuction.MaxBid)
	if err != nil {
		return nil, err
	}

	baseAuction.MaxBid = msg.Amount;
	baseAuction.Winner = msg.Creator;
	k.Keeper.SetBaseAuction(ctx, baseAuction)

	systemInfo.BidId++
	k.Keeper.SetSystemInfo(ctx, systemInfo)

	k.Keeper.SetBaseBid(ctx, baseBid)

	ctx.EventManager().EmitTypedEvent(&types.PlacedBid{
		Creator:    msg.Creator,
		AuctionId: 	msg.AuctionId,
		Amount:  msg.Amount,
	})

	return &types.MsgPlaceBidResponse{}, nil
}
