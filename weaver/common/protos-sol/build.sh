# Copyright IBM Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0

#!/bin/bash

WEAVER_ROOT=${1:-".."}

SOLIDITY_PROTOSDIR=./solidity-protos
# check if local fabric-protos dir exists
if [ ! -d "${SOLIDITY_PROTOSDIR}" ]
then 
    echo "Local BESU-protos directory doesn't exist, cloning..."
    (git clone https://github.com/celestiaorg/protobuf3-solidity.git ${SOLIDITY_PROTOSDIR} && cd ${SOLIDITY_PROTOSDIR} && make)
fi
cp ${WEAVER_ROOT}/protos/common/asset_locks.proto ./asset_locks.proto
sed -i.bak '/^package /d' ./asset_locks.proto
rm -rf ./asset_locks.proto.bak
protoc --plugin ${SOLIDITY_PROTOSDIR}/bin/protoc-gen-sol --sol_out . asset_locks.proto