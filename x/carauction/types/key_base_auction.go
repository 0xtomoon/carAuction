package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BaseAuctionKeyPrefix is the prefix to retrieve all BaseAuction
	BaseAuctionKeyPrefix = "BaseAuction/value/"
)

// BaseAuctionKey returns the store key to retrieve a BaseAuction from the index fields
func BaseAuctionKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
