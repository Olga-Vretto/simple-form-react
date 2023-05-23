import React, { useState } from 'react';
import './Form.css'

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errMessage, setErrMessage] = useState({ name: '', email: '', phone: '' });
  const [readyMessage, setReadyMessage] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setErrMessage({ ...errMessage, name: 'Please write your name' });
    } else {
      setErrMessage({ ...errMessage, name: '' });
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!e.target.value || !emailRegex.test(e.target.value)) {
      setErrMessage({ ...errMessage, email: 'Please write the correct email' });
    } else {
      setErrMessage({ ...errMessage, email: '' });
    }
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    const phoneRegex = /^\d{12}$/;
    if (!e.target.value || !phoneRegex.test(e.target.value)) {
      setErrMessage({ ...errMessage, phone: 'Please write the correct phone number' });
    } else {
      setErrMessage({ ...errMessage, phone: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      setReadyMessage('Your information is added successfully!');
    } else {
      setReadyMessage('Please correct your information!');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div className='input-box'>
          <label>Name:</label>
          <input className='input' type='text' name='name' value={name} onChange={handleChangeName} />
        </div>
          {errMessage.name && <p className='error'>{errMessage.name}</p>}

        <div className='input-box'>
          <label>Email: </label>
          <input className='input' type='email' name='email' value={email} onChange={handleChangeEmail} />  
        </div>
          {errMessage.email && <p className='error'>{errMessage.email}</p>}

        <div className='input-box'>
          <label>Phone:</label>
          <input className='input' type='tel' name='phone' value={phone} onChange={handleChangePhone} />
        </div>
          {errMessage.phone && <p className='error'>{errMessage.phone}</p>}

        <button className='button' type='submit'>Submit</button>
      </form>
      {readyMessage && <p className='text'>{readyMessage}</p>}
    </>
  );
};

export default Form;
