#!/bin/bash

echo "closing webapp."
npm stop
echo "starting webapp."
npm start &
