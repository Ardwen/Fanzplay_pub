
import React, { useState } from 'react';
import {signin} from "./auth.js"

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      let a = await signin(username.value, password.value);
      if(a.admin){
        console.log("not a valid user");
        setError("not a valid user")
      }else{
        localStorage.setItem('uid', a.id);
        props.history.push('/gamelist');
      }
    } catch (error) {
      setError("Incorrect password or username");
      console.log(error);
    }
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
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 15 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={'Login'} onClick={handleLogin} /><br />
      <a href="/signup">register now!</a>
      <br />
      <a href="/loginadmin">Log in as an administrator</a>
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

export default Login;
