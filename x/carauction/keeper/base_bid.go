package keeper

import (
	"carAuction/x/carauction/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetBaseBid set a specific baseBid in the store from its index
func (k Keeper) SetBaseBid(ctx sdk.Context, baseBid types.BaseBid) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseBidKeyPrefix))
	b := k.cdc.MustMarshal(&baseBid)
	store.Set(types.BaseBidKey(
		baseBid.Index,
	), b)
}

// GetBaseBid returns a baseBid from its index
func (k Keeper) GetBaseBid(
	ctx sdk.Context,
	index string,

) (val types.BaseBid, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseBidKeyPrefix))

	b := store.Get(types.BaseBidKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBaseBid removes a baseBid from the store
func (k Keeper) RemoveBaseBid(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseBidKeyPrefix))
	store.Delete(types.BaseBidKey(
		index,
	))
}

// GetAllBaseBid returns all baseBid
func (k Keeper) GetAllBaseBid(ctx sdk.Context) (list []types.BaseBid) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseBidKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BaseBid
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetAllBaseBidByAuctionId returns all baseBid by auctionId
func (k Keeper) GetAllBaseBidByAuctionId(ctx sdk.Context, auctionId string) (list []types.BaseBid) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseBidKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BaseBid
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.AuctionId == auctionId {
			list = append(list, val)
		}
	}

	return list
}
