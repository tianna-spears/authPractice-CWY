require('dotenv').config()

const express= require('express')
const app = express()
const connectDatabase = require('./database')
const cors = require('cors')


const PORT= process.env.PORT || 5000;

// middleware
app.use(express.json())
app.use(cors())

// start server
app.listen(PORT, () => {
  console.log(`Server is listening at Port ${PORT}`);
});

connectDatabase()