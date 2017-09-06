# Parse URL-Encoded body example

## The idea behind the example

Shows how to get urlencoded (html form post) data posted to your microservice using async/await.

[Live Example](https://linklet-url-encoded-body-parsing.cloud.dropstack.run)

```bash
curl -XPOST https://linklet-url-encoded-body-parsing.cloud.dropstack.run \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d 'hello=world'
```

## How to use Linklet

Install a microservice and run:

```bash
npm install -g linklet
linklet create url-encoded-body-parsing
cd url-encoded-body-parsing
# edit the index.js
npm run dev # for development
# npm start # for production
# npm test # for test run
```

## Deploy to the hybrid-cloud with [DropStack](https://dropstack.run)

### CLI-Deploy

```bash
npm install -g dropstack-cli
dropstack login
dropstack deploy
```

### One-Click Web-Deploy

[![Deploy to DropStack](https://deploy.cloud.dropstack.run/button.svg)](https://deploy.cloud.dropstack.run?repo=https://github.com/CodeCommission/linklet-examples/tree/master/urlencoded-body-parsing)