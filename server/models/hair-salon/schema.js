export const options = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

export const schema = {
  address: { type: String, trim: true },
  branches: [{ type: ObjectId, ref: 'HairSalon' }], // Melhorar isso
  email: { type: String, unique: true },
  employees: [{ type : ObjectId, ref: 'User' }],
  founder: [{ type: ObjectId, ref: 'User' }],
  gender: { type: String, enum: ['male', 'female', 'other'] },
  geo: { lat: { type: Number }, lon: { type: Number }, index: '2d' }, // Talvez: { type: [Number] }
  logo: String,
  name: { type: String, trim: true },
  openingHours: { type: String, trim: true },
  paymentAccepted: [ type: String ],
  priceRange: { type: String },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  phone: { type: String, trim: true },
  reviews: [{ type: ObjectId, ref: 'Review' }],
  services: [{ type: ObjectId, ref: 'Service' }], // Embeded
  smokingAllowed: Boolean,
  socialNumber: { type: String, unique: true, index: true },
  website: String,
  facebook: String,
  twitter: String,
  google: String,
  github: String,
  vk: String
};

export default schema;
