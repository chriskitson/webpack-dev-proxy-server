# Webpack Dev Proxy Server

This setup runs webpack-dev-server inside Docker to proxy requests to external APIs.

This was created to simulate a local development environment inside a local k8s ([kubernetes](https://kubernetes.io/)) cluster.

*This should not be used in production, but you already knew that, right?*

There are also several other ways to achieve this including ngnix rewrites.

## Install

Install dependencies using `npm install`.

Start server using `npm start`.

## Configuration

Set configuration in `webpack.config.js`.

For a full list of options see [https://webpack.js.org/configuration/dev-server/](https://webpack.js.org/configuration/dev-server/).

Set your proxy paths and targets in `proxy.conf.json`.

## Run inside docker

Create image using `make image`.

Run inside docker using `make run`, then browse to [http://docker.ip:3001/](http://docker.ip:3001/).