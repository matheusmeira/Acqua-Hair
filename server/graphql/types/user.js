import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  } from 'graphql';

// import UserQLType from './user';
import GenderEnum from '../util-graphql/gender';
import GeoObject from '../util-graphql/geo';

export default {
  name: 'User',
  description: 'A user',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    address: { type: GraphQLString },
    birthday: { type: GraphQLString },
    email: { type: GraphQLString },
    // favorites: { type: new GraphQLList(UserQLType) },
    firstName: { type: GraphQLString },
    gender: { type: new GraphQLEnumType(GenderEnum) },
    lastName: { type: GraphQLString },
    geo: { type: new GraphQLList(GraphQLFloat) },
    middleName: { type: GraphQLString },
    phone: { type: GraphQLString },
    picture: { type: GraphQLString },
    socialNumber: { type: GraphQLString },
    website: { type: GraphQLString },
  }),
};
