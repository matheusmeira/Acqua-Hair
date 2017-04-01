import {
  GraphQLFloat,
  GraphQLString,
} from 'graphql';

export default {
  name: 'Geo',
  fields: {
    lat: { type: GraphQLFloat },
    lon: { type: GraphQLFloat },
    formatted: {
      type: GraphQLString,
      resolve(obj) {
        return `${obj.lat}, ${obj.lon}`;
      },
    },
  },
};
