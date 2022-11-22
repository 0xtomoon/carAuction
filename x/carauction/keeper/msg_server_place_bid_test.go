package keeper_test

import (
	"context"
	"testing"

	keepertest "carAuction/testutil/keeper"
	"carAuction/x/carauction"
	"carAuction/x/carauction/keeper"
	"carAuction/x/carauction/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

const (
	bob = "cosmos1fxe5lfz0xk7mdcgc8s3vr6vl3eetd9df2ewqgg"
)

func setupMsgServerPlaceBid(t testing.TB) (types.MsgServer, keeper.Keeper, context.Context) {
	k, ctx := keepertest.CarauctionKeeper(t)
	carauction.InitGenesis(ctx, *k, *types.DefaultGenesis())
	server := keeper.NewMsgServerImpl(*k)
	context := sdk.WrapSDKContext(ctx)
	return server, *k, context
}

func TestPlaceBid(t *testing.T) {
	msgServer, _, context := setupMsgServerCreateAuction(t)
	msgServer.CreateAuction(context, &types.MsgCreateAuction{
		Creator: 	alice,
		CarLabel:   "A111",
	})
	
	_, err := msgServer.PlaceBid(context, &types.MsgPlaceBid{
		Creator: 	bob,
		AuctionId: 	"1",
		Amount: 	100,
	})
	require.Nil(t, err)
}