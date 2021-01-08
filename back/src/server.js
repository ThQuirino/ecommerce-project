const {ApolloServer,gql }=require('apollo-server')
const typeDefs=require( './schemas/index')
const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  const resolvers = {
  Query: {
    books: () => books,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});