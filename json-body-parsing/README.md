# Parse JSON body example

## The idea behind the example

Shows how to get data posted to your microservice using async/await.

[Live Example](https://linklet-json-body-parsing.cloud.dropstack.run)

```bash
curl -XPOST https://linklet-json-body-parsing.cloud.dropstack.run \
  -H "Content-Type: application/json" \
  -d '{"hello":"world"}'
```

## How to use Linklet

Install a microservice and run:

```bash
npm install -g linklet
linklet create json-body-parsing
cd json-body-parsing
# edit the index.js
npm run dev # for development
# npm start # for production
# npm test # for test run
```

## Deploy

[![One-Click-Deploy to DropStack](https://deploy.cloud.dropstack.run/button.svg)](https://deploy.cloud.dropstack.run?repo=https://github.com/CodeCommission/linklet-examples/tree/master/json-body-parsing)


Deploy it to the hybrid-cloud with [DropStack](https://dropstack.run)

```bash
npm install -g dropstack-cli
dropstack login
dropstack deploy
```
