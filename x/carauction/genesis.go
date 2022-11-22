package carauction

import (
	"carAuction/x/carauction/keeper"
	"carAuction/x/carauction/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if &genState.SystemInfo != nil {
		k.SetSystemInfo(ctx, genState.SystemInfo)
	}
	// Set all the baseAuction
	for _, elem := range genState.BaseAuctionList {
		k.SetBaseAuction(ctx, elem)
	}
	// Set all the baseBid
	for _, elem := range genState.BaseBidList {
		k.SetBaseBid(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all systemInfo
	systemInfo, found := k.GetSystemInfo(ctx)
	if found {
		genesis.SystemInfo = systemInfo
	}
	genesis.BaseAuctionList = k.GetAllBaseAuction(ctx)
	genesis.BaseBidList = k.GetAllBaseBid(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
