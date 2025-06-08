const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
    });
    console.log('Database connected!');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = connectDatabase;