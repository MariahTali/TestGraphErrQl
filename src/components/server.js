const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
//   GraphQLList,
//   GraphQLInt,
//   GraphQLNonNull,
} = require('graphql');

const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World from resolver',
      },
    }),
  }),
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(3001, () => console.log('server running'));

module.exports = schema;