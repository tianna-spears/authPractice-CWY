import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitting:", { name, email, password });
    axios.post('http://localhost:3000/register', {name, email, password})
      .then(result => console.log(result))
      .catch(err=> console.log(err))
  }


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2> Register</h2>

      <form onSubmit= {handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">
            {" "}
            <strong> Name </strong>{" "}
          </label>
          <input
            className="form-control rounded-0"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email">
            {" "}
            <strong> Email </strong>{" "}
          </label>
          <input
            className="form-control rounded-0"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange= {(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">
            {" "}
            <strong> Password </strong>{" "}
          </label>
          <input
            className="form-control rounded-0"
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-success w-100 rounded-0"
          type="submit"
          name="register"
          value="Register"
        >
          {" "}
          Register{" "}
        </button>

    </form>

        <p> Already Have an Account? </p>
        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" type="button" name="login" value="Login">
          {" "}
          Login{" "}
        </Link>
    </div>
</div>
  );
};

export default Register;
