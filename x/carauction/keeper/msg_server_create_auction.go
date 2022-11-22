package keeper

import (
	"context"
	"strconv"

	"carAuction/x/carauction/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateAuction(goCtx context.Context, msg *types.MsgCreateAuction) (*types.MsgCreateAuctionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	systemInfo, found := k.Keeper.GetSystemInfo(ctx)
	if !found {
		panic("SystemInfo not found")
	}

	newAuctionId := strconv.FormatUint(systemInfo.AuctionId, 10)

	baseAuction := types.BaseAuction{
		Index: newAuctionId,
		CarLabel: msg.CarLabel,
		MaxBid: 0,
		Winner: "",
		BlockNumber: ctx.BlockHeight(),
		Ended: false,
	}

	k.Keeper.SetBaseAuction(ctx, baseAuction)
	systemInfo.AuctionId++
	k.Keeper.SetSystemInfo(ctx, systemInfo)

	ctx.EventManager().EmitTypedEvent(&types.AuctionCreated{
		Creator: msg.Creator,
		AuctionId: newAuctionId,
	})

	return &types.MsgCreateAuctionResponse{
		AuctionId: newAuctionId,
		BlockNumber: ctx.BlockHeight(),
	}, nil
}
