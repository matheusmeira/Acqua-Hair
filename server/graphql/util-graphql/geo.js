import {
  GraphQLFloat,
  GraphQLList,
  GraphQLString,
} from 'graphql';

export default {
  name: 'Geo',
  fields: {
    geo: { type: new GraphQLList(GraphQLFloat) },
    formatted: {
      type: GraphQLString,
      resolve(array) {
        return `${array[0]}, ${array[1]}`;
      },
    },
  },
};
