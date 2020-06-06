#!/bin/bash

npm stop
echo "app.js closed."
echo "stopping redis-server."
service redis-server stop
echo "redis server closed."
