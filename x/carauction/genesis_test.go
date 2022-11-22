package carauction_test

import (
	"testing"

	keepertest "carAuction/testutil/keeper"
	"carAuction/testutil/nullify"
	"carAuction/x/carauction"
	"carAuction/x/carauction/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		SystemInfo: &types.SystemInfo{
			AuctionId: 23,
			BidId:     39,
		},
		BaseAuctionList: []types.BaseAuction{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		BaseBidList: []types.BaseBid{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CarauctionKeeper(t)
	carauction.InitGenesis(ctx, *k, genesisState)
	got := carauction.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.SystemInfo, got.SystemInfo)
	require.ElementsMatch(t, genesisState.BaseAuctionList, got.BaseAuctionList)
	require.ElementsMatch(t, genesisState.BaseBidList, got.BaseBidList)
	// this line is used by starport scaffolding # genesis/test/assert
}
