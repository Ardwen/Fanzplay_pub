import React, { useState } from 'react';
import {signup} from "./auth.js"

function Registeradmin(props) {
  const password = useFormInput('');
  const email = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    console.log(email.value);
      try {
        let a = await signup(email.value, password.value, true);
        props.history.push('/loginadmin')
        console.log(a);
          } catch (error) {
        console.log(error);
      }
      /*API.post(`user/register`, {
        userName: username.value,
        userEmail: email.value,
        userPassword: password.value
      })
    .then(response => {
          props.history.push('/');
    })
    .catch(err => setError("Register Failed. Username or email already exist"))*/
  }

  return (
    <div className="logindiv" >
    <img
    src="asset/fanzplay-logo.png"
    width="100"
    height="100"
    className="d-inline-block align-top"
    />
    <br />
      Sign up<br /><br />
      <div style={{ marginTop: 15 }}>
        Email<br />
        <input type="email" {...email} autoComplete="new-email" />
      </div>f
      <div style={{ marginTop: 15 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Sign Up'} onClick={handleRegister} disabled={loading} /><br />
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Registeradmin;
