package simulation

import (
	"math/rand"

	"carAuction/x/carauction/keeper"
	"carAuction/x/carauction/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgCreateAuction(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCreateAuction{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CreateAuction simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CreateAuction simulation not implemented"), nil, nil
	}
}
