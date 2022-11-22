package keeper_test

import (
	"context"
	"strconv"
	"testing"

	keepertest "carAuction/testutil/keeper"
	"carAuction/testutil/nullify"
	"carAuction/x/carauction"
	"carAuction/x/carauction/keeper"
	"carAuction/x/carauction/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNBaseAuction(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.BaseAuction {
	items := make([]types.BaseAuction, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetBaseAuction(ctx, items[i])
	}
	return items
}

func TestBaseAuctionGet(t *testing.T) {
	keeper, ctx := keepertest.CarauctionKeeper(t)
	items := createNBaseAuction(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBaseAuction(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBaseAuctionRemove(t *testing.T) {
	keeper, ctx := keepertest.CarauctionKeeper(t)
	items := createNBaseAuction(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBaseAuction(ctx,
			item.Index,
		)
		_, found := keeper.GetBaseAuction(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestBaseAuctionGetAll(t *testing.T) {
	keeper, ctx := keepertest.CarauctionKeeper(t)
	items := createNBaseAuction(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBaseAuction(ctx)),
	)
}

func TestActiveBaseAuctionGetAll(t *testing.T) {
	keeper, ctx := keepertest.CarauctionKeeper(t)
	items := createNBaseAuction(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllActiveBaseAuction(ctx)),
	)
}

func setupMsgServerBaseAuction(t testing.TB) (types.MsgServer, keeper.Keeper, context.Context) {
	k, ctx := keepertest.CarauctionKeeper(t)
	carauction.InitGenesis(ctx, *k, *types.DefaultGenesis())
	server := keeper.NewMsgServerImpl(*k)
	context := sdk.WrapSDKContext(ctx)
	return server, *k, context
}

func TestCheckAuction(t *testing.T) {
	_, keeper, context := setupMsgServerBaseAuction(t)
	keeper.CheckAuction(context)

	_, ctx := keepertest.CarauctionKeeper(t)
	var _ = ctx.BlockHeight()
}