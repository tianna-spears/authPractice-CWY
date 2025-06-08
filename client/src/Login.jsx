import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitting:", { email, password });
    axios.post('http://localhost:3000/login', {email, password})
      .then(result => {
        console.log(result)
        if( result.data.message === 'Success') {
            navigate('/home') 
      }
    })
      .catch(err=> console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2> Login</h2>

      <form onSubmit= {handleSubmit}>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange= {(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-success w-100 rounded-0"
          type="submit"
          name="login"
          value="login"
        >
          {" "}
          Click Here to Login{" "}
        </button>

    </form>

    </div>
</div>
  );
};

export default Login;
