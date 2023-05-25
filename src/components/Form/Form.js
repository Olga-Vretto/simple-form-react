import React, { useState } from 'react';
import Inputs from '../Inputs/Inputs';
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

  const inputFields = [
    { label: 'Name:', type: 'text', name: 'name', value: name, onChange: handleChangeName, error: errMessage.name },
    { label: 'Email:', type: 'email', name: 'email', value: email, onChange: handleChangeEmail, error: errMessage.email },
    { label: 'Phone:', type: 'tel', name: 'phone', value: phone, onChange: handleChangePhone, error: errMessage.phone },
  ];

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <Inputs fields={inputFields} />
        <button className='button' type='submit'>Submit</button>
      </form>
      {readyMessage && <p className='text'>{readyMessage}</p>}
    </>
  );
};

export default Form;