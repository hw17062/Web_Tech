#!/bin/bash

echo "starting redis-server."
redis-server --daemonize yes
echo "redis-server ready."
echo "starting web server."
npm start &
