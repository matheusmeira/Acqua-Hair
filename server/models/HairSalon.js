var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

var hairSalonSchema = new mongoose.Schema({
  address: { type: String, trim: true },
  email: { type: String, unique: true },
  employee: [{ type : ObjectId, ref: 'User' }],
  founder: [{ type: ObjectId, ref: 'User' }],
  gender: { type: String, enum: ['male', 'female', 'other'] },
  geo: { type: [{ lat: Number, lon: Number }], index: '2d' },
  logo: String,
  name: { type: String, trim: true },
  openingHours: { type: String, trim: true },
  paymentAccpeted: [ type: String ],
  priceRange: { type: String },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  phone: { type: String, trim: true },
  reviews: [{ type: ObjectId, ref: 'Review' }],
  service: [{ type: ObjectId, ref: 'Service' }], // Embeded
  smokingAllowed: Boolean,
  socialNumber: { type: String, unique: true, index: true },
  website: String,
  facebook: String,
  twitter: String,
  google: String,
  github: String,
  vk: String
}, schemaOptions);

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

var User = mongoose.model('User', hairSalonSchema);

module.exports = User;
