#! /usr/bin/env bash

S3_BUCKET=s3://www.nealjs.com
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../" && pwd)"
cd $BASE_DIR

# Build the assets
webpack -p

# Upload to S3
aws s3 cp $BASE_DIR/public/ $S3_BUCKET --recursive