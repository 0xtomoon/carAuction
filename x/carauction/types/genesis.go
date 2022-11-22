package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		SystemInfo: SystemInfo{
			AuctionId: uint64(DefaultIndex),
			BidId:     uint64(DefaultIndex),
		},
		BaseAuctionList: []BaseAuction{},
		BaseBidList:     []BaseBid{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in baseAuction
	baseAuctionIndexMap := make(map[string]struct{})

	for _, elem := range gs.BaseAuctionList {
		index := string(BaseAuctionKey(elem.Index))
		if _, ok := baseAuctionIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for baseAuction")
		}
		baseAuctionIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in baseBid
	baseBidIndexMap := make(map[string]struct{})

	for _, elem := range gs.BaseBidList {
		index := string(BaseBidKey(elem.Index))
		if _, ok := baseBidIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for baseBid")
		}
		baseBidIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
