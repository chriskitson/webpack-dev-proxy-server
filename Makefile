VERSION=v1.0.0

image:
	docker build -t webpack-dev-proxy-server:${VERSION} .

run:
	docker run -p 3001:80 webpack-dev-proxy-server:${VERSION}