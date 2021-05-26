import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {

    // make it so that the GET on get genres once as components loads
    useEffect(() => {
      //dispatch the saga 
      dispatch({ type: ''})
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [distance, setDistance] = useState('');
  


  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const distances = useSelector( (store) => store.distance)

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        user_email: email,
        user_zip: zip,
        distance: distance,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="zip">
          Zip Code:
          <input
            type="zip"
            name="zip"
            value={zip}
            required
            onChange={(event) => setZip(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="distance">
          Distance:
          <select
            required
            onChange={(event) => setDistance(event.target.value)}
          >
            <option>Choose One</option>
            {/* <option>Local</option>
            <option>Neighboring State</option>
            <option>Anywhere</option> */}
            {distances.map(item => {
              return <option key={item.id} value={item.id}>{item.name}</option>
            })}
            
          </select>
        </label>
      </div>

      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
