export const options = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

export const schema = {
  address: { type: String, trim: true },
  birthday: { type: String, trim: true },
  email: { type: String, unique: true},
  favorites: [{ type : ObjectId, ref: 'User' }],
  firstName: { type: String, trim: true },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  lastName: { type: String, trim: true },
  geo: { lat: { type: Number }, lon: { type: Number }, index: '2d' }, // Talvez: { type: [Number] }
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
};

export default schema;
