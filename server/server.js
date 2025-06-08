require('dotenv').config()

const express= require('express')
const app = express()
const connectDatabase = require('./database')
const cors = require('cors')
const PORT= process.env.PORT || 3000;
const Employee = require('./models/Employee')

// middleware
app.use(express.json())
app.use(cors())


// start database
connectDatabase()

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.post('/register', async (req, res) => {
  console.log('POST /register received with body:', req.body);
  try {
    const {name, email, password} = req.body;
    const employee = await Employee.create({ name, email, password });
        console.log('Saved employee:', employee);
    res.json({ message: 'Test route works! No DB call.' });
  } catch (err) {
        console.error('Error saving employee:', err);
    res.status(400).json({ error: err.message });
  }
});

// start server
app.listen(PORT, () => {
  console.log(`Server is listening at Port ${PORT}`);
});