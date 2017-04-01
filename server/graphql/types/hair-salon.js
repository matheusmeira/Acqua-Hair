import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  } from 'graphql';

// import HairSalon from '../user/HairSalon';
// import User from '../user/QLType';
// import Review from '../user/QLType';
// import Service from '../user/QLType';

import GenderEnum from '../util-graphql/gender';
import GeoObject from '../util-graphql/geo';

export default {
  name: 'HairSalon',
  description: 'A hair salon',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    address: { type: GraphQLString },
    branches: { type: GraphQLString },
    email: { type: GraphQLString },
    // employees: { type: new GraphQLList(User) },
    // founder: { type: new GraphQLList(User) },
    geo: { type: new GraphQLList(GraphQLFloat)  },
    logo: { type: GraphQLString },
    name: { type: GraphQLString },
    openingHours: { type: GraphQLString },
    // paymentAccepted: { type: new GraphQLList(GraphQLString) },
    priceRange: { type: GraphQLString },
    phone: { type: GraphQLString },
    // reviews: { type: new GraphQLList(Review) },
    // services: { type: new GraphQLList(Service) },
    smokingAllowed: { type: GraphQLBoolean },
    socialNumber: { type: GraphQLString },
    website: { type: GraphQLString },
  })
};
