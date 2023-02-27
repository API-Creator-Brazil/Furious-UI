#!/bin/bash

rm node_modules -rf && yarn cache clean
yarn
npx vitest
npx vite build
