## Commands to use:
npm init -y
npm i --save-dev typescript

Modification in package.json
  "scripts": {
    "start": "tsc --watch"
  }

Changes in tsc.config
"outDir": "./dist/",

## inspired by 
https://www.youtube.com/watch?v=jBmrduvKl5w

## Issue with this setup

This setup doesnt support using external modules,
for that we need bundler like webpack, snowpack or parcel.