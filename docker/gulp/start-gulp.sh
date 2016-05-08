#!/usr/bin/env bash

until cd /usr/src/app && npm install
do
    echo "Retrying npm install"
done
gulp watch
