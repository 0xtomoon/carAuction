package keeper

import (
	"context"

	"carAuction/x/carauction/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetBaseAuction set a specific baseAuction in the store from its index
func (k Keeper) SetBaseAuction(ctx sdk.Context, baseAuction types.BaseAuction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseAuctionKeyPrefix))
	b := k.cdc.MustMarshal(&baseAuction)
	store.Set(types.BaseAuctionKey(
		baseAuction.Index,
	), b)
}

// GetBaseAuction returns a baseAuction from its index
func (k Keeper) GetBaseAuction(
	ctx sdk.Context,
	index string,

) (val types.BaseAuction, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseAuctionKeyPrefix))

	b := store.Get(types.BaseAuctionKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBaseAuction removes a baseAuction from the store
func (k Keeper) RemoveBaseAuction(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseAuctionKeyPrefix))
	store.Delete(types.BaseAuctionKey(
		index,
	))
}

// GetAllBaseAuction returns all baseAuction
func (k Keeper) GetAllBaseAuction(ctx sdk.Context) (list []types.BaseAuction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseAuctionKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BaseAuction
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetAllBaseAuction returns all baseAuction
func (k Keeper) GetAllActiveBaseAuction(ctx sdk.Context) (list []types.BaseAuction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseAuctionKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BaseAuction
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Ended == false { 
			list = append(list, val)
		}
	}

	return
}

func (k Keeper) CheckAuction(goCtx context.Context) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var blockNumber = ctx.BlockHeight()
	var auctions = k.GetAllActiveBaseAuction(ctx)
	for _, auction := range auctions {
		if  blockNumber - auction.BlockNumber >= 100 {
			auction.Ended = true
			k.SetBaseAuction(ctx, auction)

			ctx.EventManager().EmitTypedEvent(&types.AuctionEnded{
				AuctionId: 	auction.Index,
				CarLabel: 	auction.CarLabel,
				BidAmount:  auction.MaxBid,
				Winner:     auction.Winner,
			})

		}
	}

}
