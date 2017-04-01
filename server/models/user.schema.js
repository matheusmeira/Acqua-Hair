import options from './utils/options';

export const schema = (mongoose) => new mongoose.Schema({
  address: { type: String, trim: true },
  birthday: { type: String, trim: true },
  email: { type: String, unique: true},
  // employer: [{ type: mongoose.Schema.ObjectId, ref: 'HairSalon' }],
  // favorites: [{ type : mongoose.Schema.Types.ObjectId, ref: 'User' }],
  firstName: { type: String, trim: true },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  lastName: { type: String, trim: true },
  geo: { type: [Number], index: '2d' },
  // geo: { lat: { type: Number }, lon: { type: Number }, index: '2d' }, // Talvez: { type: [Number] }
  middleName: { type: String, trim: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  phone: { type: String, trim: true },
  picture: String,
  socialNumber: { type: String, unique: true, index: true },
  website: String,
  facebook: String,
  twitter: String,
  google: String,
  github: String,
  vk: String
}, options);

export default schema;
