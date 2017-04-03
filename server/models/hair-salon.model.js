var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

import schema from './hair-salon.schema';

var hairSalonSchema = schema(mongoose);

hairSalonSchema.pre('save', function(next) {
  var hairSalon = this;
  if (!hairSalon.isModified('password')) { return next(); }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(hairSalon.password, salt, null, function(err, hash) {
      hairSalon.password = hash;
      next();
    });
  });
});

hairSalonSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    cb(err, isMatch);
  });
};

hairSalonSchema.virtual('gravatar').get(function() {
  if (!this.get('email')) {
    return 'https://gravatar.com/avatar/?s=200&d=retro';
  }
  var md5 = crypto.createHash('md5').update(this.get('email')).digest('hex');
  return 'https://gravatar.com/avatar/' + md5 + '?s=200&d=retro';
});

hairSalonSchema.options.toJSON = {
  transform: function(doc, ret, options) {
    delete ret.password;
    delete ret.passwordResetToken;
    delete ret.passwordResetExpires;
  }
};

export default mongoose.model('HairSalon', hairSalonSchema);
