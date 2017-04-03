import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
import graphqlHTTP from 'express-graphql';

import user from './queries/user';
import hairSalon from './queries/hair-salon';

const createGraphQLHTTP = (fields) => graphqlHTTP(req => ({
  schema: new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields,
    })
  }),
  pretty: true,
  graphiql: true
}));

export default {
  registerRoutes(app) {
    // Separated
    app.use('/user', createGraphQLHTTP({ user }));

    app.use('/hair-salon', createGraphQLHTTP({ hairSalon }));

    // // Unique
    // app.use('/graphql', graphqlHTTP(req => ({
    //   schema: new GraphQLSchema({
    //     query: new GraphQLObjectType({
    //       name: 'Query',
    //       fields: queries,
    //     })
    //   }),
    //   pretty: true,
    //   graphiql: false
    // }))
  },
};
