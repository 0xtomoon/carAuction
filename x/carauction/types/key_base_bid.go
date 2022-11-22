package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BaseBidKeyPrefix is the prefix to retrieve all BaseBid
	BaseBidKeyPrefix = "BaseBid/value/"
)

// BaseBidKey returns the store key to retrieve a BaseBid from the index fields
func BaseBidKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
