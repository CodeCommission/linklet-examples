# GraphQL example

## The idea behind the example

Shows how to get data from a GraphQL endpoint using GraphQL and [Apollo-Cient](https://github.com/apollographql/apollo-client). This example relies on [SubKit](https://github.com/codecommission/subkit) for its GraphQL-Backend.

[Live Example](https://linklet-with-graphql.cloud.dropstack.run)

```bash
curl https://linklet-with-graphql.cloud.dropstack.run
```

## How to use Linklet

Install a microservice and run:

```bash
npm install -g linklet
linklet create with-graphql
cd with-graphql
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

[![Deploy to DropStack](https://deploy.cloud.dropstack.run/button.svg)](https://deploy.cloud.dropstack.run?repo=https://github.com/CodeCommission/linklet-examples/tree/master/with-graphql)