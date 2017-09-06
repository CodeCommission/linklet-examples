# External API call example

## The idea behind the example

Shows how to get JSON data from an external API using async/await.

[Live Example](https://linklet-external-api-call.cloud.dropstack.run)

```bash
curl https://linklet-external-api-call.cloud.dropstack.run
```

## How to use Linklet

Install a microservice and run:

```bash
npm install -g linklet
linklet create external-api-call
cd external-api-call
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

[![Deploy to DropStack](https://deploy.cloud.dropstack.run/button.svg)](https://deploy.cloud.dropstack.run?repo=https://github.com/CodeCommission/linklet-examples/tree/master/external-api-call)