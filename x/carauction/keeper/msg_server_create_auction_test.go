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
	alice = "cosmos1jmjfq0tplp9tmx4v9uemw72y4d2wa5nr3xn9d3"
)

func setupMsgServerCreateAuction(t testing.TB) (types.MsgServer, keeper.Keeper, context.Context) {
	k, ctx := keepertest.CarauctionKeeper(t)
	carauction.InitGenesis(ctx, *k, *types.DefaultGenesis())
	server := keeper.NewMsgServerImpl(*k)
	context := sdk.WrapSDKContext(ctx)
	return server, *k, context
}

func TestCreateAuction(t *testing.T) {
	_, ctx := keepertest.CarauctionKeeper(t)
	msgServer, _, context := setupMsgServerCreateAuction(t)
	createResponse, err := msgServer.CreateAuction(context, &types.MsgCreateAuction{
		Creator: 	alice,
		CarLabel:   "A111",
	})
	require.Nil(t, err)
	require.EqualValues(t, types.MsgCreateAuctionResponse{
		AuctionId: 		"1",
		BlockNumber:  	ctx.BlockHeight(),
	}, *createResponse)
}