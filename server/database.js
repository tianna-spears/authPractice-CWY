const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('Database is up and running!')
    } catch(err) {
        console.log('Error connecting to the database.', err)
    }   
}

module.exports = connectDatabase;