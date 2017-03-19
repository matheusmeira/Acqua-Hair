import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

const queryUser = new GraphQLObjectType({
  name: 'User',
  description: '...',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (user) => user.name,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
    },
    gender: {
      type: GraphQLString,
      resolve: (user) => user.gender,
    },
    location: {
      type: GraphQLString,
      resolve: (user) => user.location,
    },
    website: {
      type: GraphQLString,
      resolve: (user) => user.website,
    },
    picture: {
      type: GraphQLString,
      resolve: (user) => user.picture,
    },
    facebook: {
      type: GraphQLString,
      resolve: (user) => user.facebook,
    },
    twitter: {
      type: GraphQLString,
      resolve: (user) => user.twitter,
    },
    google: {
      type: GraphQLString,
      resolve: (user) => user.google,
    },
    github: {
      type: GraphQLString,
      resolve: (user) => user.github,
    },
    vk: {
      type: GraphQLString,
      resolve: (user) => user.vk,
    }
  }),
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    user: {
      type: queryUser,
      args: {
        id: { type: GraphQLString },
      },
      resolve(root, args) {
        return { name: 'test' };
      },
    },
  }),
});

export default {
  getSchema() {
    return new GraphQLSchema({
      query: queryType,
    });
  },
};
