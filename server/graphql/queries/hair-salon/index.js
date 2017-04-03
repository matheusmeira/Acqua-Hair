import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import hairSalonType from '../../types/hair-salon';
import HairSalonModel from '../../../models/hair-salon.model';

export default {
  type: new GraphQLObjectType(hairSalonType),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      name: 'id',
    }
  },
  resolve (root, params, ctx, options) {
    return HairSalonModel
      .findById(params.id)
      // .populate('favorites')
      .exec();
  }
};
