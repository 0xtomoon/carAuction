package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/carauction module sentinel errors
var (
	ErrInvalidWinner 	= sdkerrors.Register(ModuleName, 3, "Winner address is invalid: %s")
	ErrInvalidBidAmount = sdkerrors.Register(ModuleName, 4, "Invalid Bid Amount")
	ErrLowBidAmount		= sdkerrors.Register(ModuleName, 5, "Bid amount is lower than the current price")
	ErrAuctionNotFound	= sdkerrors.Register(ModuleName, 6, "Auction not found")
	ErrAuctionEnded		= sdkerrors.Register(ModuleName, 7, "Auction is ended")
)
