package keeper_test

import (
	"strconv"
	"testing"

	keepertest "carAuction/testutil/keeper"
	"carAuction/testutil/nullify"
	"carAuction/x/carauction/keeper"
	"carAuction/x/carauction/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNBaseBid(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.BaseBid {
	items := make([]types.BaseBid, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetBaseBid(ctx, items[i])
	}
	return items
}

func TestBaseBidGet(t *testing.T) {
	keeper, ctx := keepertest.CarauctionKeeper(t)
	items := createNBaseBid(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBaseBid(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBaseBidRemove(t *testing.T) {
	keeper, ctx := keepertest.CarauctionKeeper(t)
	items := createNBaseBid(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBaseBid(ctx,
			item.Index,
		)
		_, found := keeper.GetBaseBid(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestBaseBidGetAll(t *testing.T) {
	keeper, ctx := keepertest.CarauctionKeeper(t)
	items := createNBaseBid(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBaseBid(ctx)),
	)
}
