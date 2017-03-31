import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import User from './User';
import UserQLType from './QLType';
import GenderEnum from '../util-graphql/gender';
import GeoObject from '../util-graphql/geo';

export default new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    address: { type: GraphQLString },
    birthday: { type: GraphQLString },
    email: { type: GraphQLString },
    favorites: { type: new GraphQLList(UserQLType) },
    firstName: { type: GraphQLString },
    gender: { type: new GraphQLEnumType(GenderEnum) },
    lastName: { type: GraphQLString },
    geo: { type: new GraphQLObjectType(GeoObject) },
    middleName: { type: GraphQLString },
    phone: { type: GraphQLString },
    picture: { type: GraphQLString },
    socialNumber: { type: GraphQLString },
    website: { type: GraphQLString },
  })
});
