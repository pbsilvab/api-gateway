#!/usr/bin/env bash

node_modules/.bin/grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./src/grpc/protos \
  --grpc_out=./src/grpc/protos \
  --plugin=protoc-gen-grpc=node_modules/.bin/grpc_tools_node_protoc_plugin \
  -I ./protos \
  ./protos/*.proto

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=./src/grpc/protos \
  -I ./protos \
  ./protos/*.proto
