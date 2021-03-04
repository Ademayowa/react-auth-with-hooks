import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
  return fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [fullname, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      fullname,
      phone,
      email,
      password,
    });
    setToken(token);
  };

  return (
    <section className='register'>
      <div className='container'>
        <div className='row'>
          <div className='register__wrapper col-md-10 mx-auto col-lg-6 z-depth-2 p-5'>
            <h2 className='text-center'>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className='form-group mb-4'>
                <label htmlFor='fullname'>Full Name</label>
                <input
                  className='form-control form-control-lg'
                  placeholder='Enter Full Name'
                  type='text'
                  required
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className='form-group mb-4'>
                <label htmlFor='phone'>Phone</label>
                <input
                  className='form-control form-control-lg'
                  placeholder='Enter Phone Number'
                  type='text'
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className='form-group mb-4'>
                <label htmlFor='email'>Email Address</label>
                <input
                  className='form-control form-control-lg'
                  placeholder='Example@email.com'
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-group mt-4'>
                <label htmlFor='password'>Password</label>
                <input
                  className='form-control form-control-lg'
                  placeholder='Enter Password'
                  type='password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='form-group mt-4'>
                <button className='btn blue-gradient btn-lg btn-block'>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
