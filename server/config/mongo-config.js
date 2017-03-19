const mongoose = require('mongoose');

export default {
  configDefault(host = 'localhost', port = '32768') {
    mongoose.connect(`mongodb://${host}:${port}`);
    mongoose.connection.on('error', function() {
      console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
      process.exit(1);
    });
  },
};
