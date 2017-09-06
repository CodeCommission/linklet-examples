global.fetch = require('node-fetch');
const {ApolloClient, createNetworkInterface} = require('apollo-client');
const gql = require('graphql-tag');

const networkInterface = createNetworkInterface({ uri: 'https://subkit-todos-api.cloud.dropstack.run/graphql' });
const client = new ApolloClient({networkInterface});
const query = gql`query load_all_todos {
  todos {
    id
    rev
    text
    complete
  }
}`;

module.exports = async () => {
  const result = await client.query({query});
  return result.data
};