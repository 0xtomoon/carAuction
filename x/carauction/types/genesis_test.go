package types_test

import (
	"testing"

	"carAuction/x/carauction/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				SystemInfo: types.SystemInfo{
					AuctionId: 91,
					BidId:     35,
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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated baseAuction",
			genState: &types.GenesisState{
				BaseAuctionList: []types.BaseAuction{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated baseBid",
			genState: &types.GenesisState{
				BaseBidList: []types.BaseBid{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
