require('dotenv').config()

const express= require('express')
const app = express()
const connectDatabase = require('./database')
const cors = require('cors')
const PORT= process.env.PORT || 3000;
const EmployeeSchema = require('./models/Employee')

// middleware
app.use(express.json())
app.use(cors())


// start database
connectDatabase()

// routes
app.get('/', (req, res) => {
    res.send('Home Page')
})

app.post('/register', async (req, res) => {
//   console.log('POST /register received with body:', req.body);
  try {
    const {name, email, password} = req.body;
    const employee = await EmployeeSchema.create({ name, email, password });
    // console.log('Saved employee:', employee);
    res.json({ message: 'Employee was successfully saved' });
    } catch (err) {
        console.error('Error saving employee:', err);
        res.status(400).json({ error: err.message });
        }
    }
);

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const employee = await EmployeeSchema.findOne({ email })

        // check if user exists
        if (!employee) {
            return res.status(400).json({ message: 'User not found.'})
        }

        // validate password
        if (employee.password === password) {
            return res.json({ message: 'Success'})
        } else {
            res.status(400).json( {message: 'Please enter correct email and password.' })
        }
    } catch(err) {
        console.log({ message: err.message })
        return res.status(500).json({ message: 'Server error'})
    }
})

// start server
app.listen(PORT, () => {
  console.log(`Server is listening at Port ${PORT}`);
});