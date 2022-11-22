package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPlaceBid = "place_bid"

var _ sdk.Msg = &MsgPlaceBid{}

func NewMsgPlaceBid(creator string, auctionId string, amount uint64) *MsgPlaceBid {
	return &MsgPlaceBid{
		Creator:   creator,
		AuctionId: auctionId,
		Amount:    amount,
	}
}

func (msg *MsgPlaceBid) Route() string {
	return RouterKey
}

func (msg *MsgPlaceBid) Type() string {
	return TypeMsgPlaceBid
}

func (msg *MsgPlaceBid) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPlaceBid) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPlaceBid) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
