const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error('MONGO_URI is not defined in the environment variables');
  process.exit(1); // Exit the process with an error code
}

if (process.env.NODE_ENV !== 'production') {
  console.log('MongoDB URI:', uri); // Log the URI only in development
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Optional: Add these options to handle deprecation warnings

})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit with failure status code
  });

module.exports = mongoose;