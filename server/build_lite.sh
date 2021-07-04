#!/bin/bash
set -e

BASEDIR=$(dirname $(realpath "$0"))
echo Building...
go build -o $BASEDIR/../public/wfs_server $BASEDIR/wfs_server_lite.go $BASEDIR/wfs_websockets_hub.go
chmod +x $BASEDIR/../public/wfs_server
echo Done
npm