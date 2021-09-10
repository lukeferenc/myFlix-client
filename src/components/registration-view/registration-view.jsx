import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';


export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthdate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, name, password, email, birthday);
    axios.post("https://lukesmovies.herokuapp.com/users", {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      // window.open('/');
      props.onRegistration();
    })
    .catch(e => {
      console.log('problem registering new user');
    });
  };

  return (
    <form>
      <label className="username">Username:
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label className="name">Name:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="password">Password:
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label className="email">E-mail:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="birthday">Birth date:
      <input type="date" value={birthday} onChange={(e) => setBirthdate(e.target.value)} />
      </label>
      <button className="registerBtn" type="submit" onClick={handleSubmit}>Register </button>
    </form>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
  }),
};