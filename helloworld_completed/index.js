const { makeExecutableSchema } = require('@graphql-tools/schema');
const { graphql } = require('graphql');

const typeDefs = `
schema {
  query: Query
}
type Query {
  hello: String
  name: String
}
`;

const resolvers = {
  Query: {
    hello: () => 'World',
    name: () => 'Remo'
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const query = process.argv[2];

graphql({schema, source: query}).then(result => {
  console.log(JSON.stringify(result, null, 2));
});
