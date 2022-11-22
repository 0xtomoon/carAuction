package types

import (
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (baseAuction BaseAuction) GetWinnerAddress() (winner sdk.AccAddress, err error) {
	winner, errWinner := sdk.AccAddressFromBech32(baseAuction.Winner)
	return winner, sdkerrors.Wrapf(errWinner, ErrInvalidWinner.Error(), baseAuction.Winner)
}

func (baseAuction BaseAuction) GetMaxBidValue() (maxBid uint64) {
	maxBid = baseAuction.MaxBid
	return maxBid
}

func (baseBid BaseBid) GetBidderAddress() (bidder sdk.AccAddress, err error) {
	bidder, errBidder := sdk.AccAddressFromBech32(baseBid.Bidder)
	return bidder, sdkerrors.Wrapf(errBidder, ErrInvalidWinner.Error(), baseBid.Bidder)
}

func (baseBid BaseBid) GetAmountValue() (amount uint64, err error) {
	var errAmount error
	if baseBid.Amount <= 0 {
		errAmount = errors.New("Invalid value")
	}

	return baseBid.Amount, sdkerrors.Wrapf(errAmount, ErrInvalidBidAmount.Error())
}

func (baseBid BaseBid) ValidateBid(maxBid uint64) error {
	_, err := sdk.AccAddressFromBech32(baseBid.Bidder)
	if err != nil {
		return err
	}
	if baseBid.Amount <= maxBid {
		return sdkerrors.Wrapf(ErrLowBidAmount, "%s", "")
	}
	return err
}
