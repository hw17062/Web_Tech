#!/bin/bash

echo "stopping redis-server."
service redis-server stop
echo "redis server closed."
npm stop
echo "app.js closed."
