import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import userType from '../../types/user';
import UserModel from '../../../models/user.model';

export default {
  type: new GraphQLObjectType(userType),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      name: 'id',
    }
  },
  resolve (root, params, ctx, options) {
    return UserModel
      .findById(params.id)
      // .populate('favorites')
      .exec();
  }
};
