#!/bin/bash

export DOCKER_HOST="ssh://mdeangelo@192.168.1.211"
docker kill seatingui
docker build -t seatingui -f Dockerfile-dev .
docker run --rm -d -p 8080:8080 --name seatingui seatingui
unset DOCKER_HOST
