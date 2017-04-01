import options from './utils/options';

export const schema = (mongoose) => new mongoose.Schema({
  address: { type: String, trim: true },
  // branches: [{ type: mongoose.Schema.ObjectId, ref: 'HairSalon' }], // Melhorar isso
  email: { type: String, unique: true },
  // employees: [{ type : mongoose.Schema.ObjectId, ref: 'User' }],
  // founder: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  geo: { type: [Number], index: '2d' },
  logo: String,
  name: { type: String, trim: true },
  openingHours: { type: String, trim: true },
  // paymentAccepted: [ type: String ],
  priceRange: { type: String },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  phone: { type: String, trim: true },
  // reviews: [{ type: mongoose.Schema.ObjectId, ref: 'Review' }],
  // services: [{ type: mongoose.Schema.ObjectId, ref: 'Service' }], // Embeded
  smokingAllowed: Boolean,
  socialNumber: { type: String, unique: true, index: true },
  website: String,
  facebook: String,
  twitter: String,
  google: String,
  github: String,
  vk: String
}, options);

export default schema;
