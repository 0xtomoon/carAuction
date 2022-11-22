package simulation

import (
	"math/rand"

	"carAuction/x/carauction/keeper"
	"carAuction/x/carauction/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgPlaceBid(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgPlaceBid{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the PlaceBid simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "PlaceBid simulation not implemented"), nil, nil
	}
}
