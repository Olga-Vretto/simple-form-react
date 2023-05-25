import React from 'react';
import './Inputs.css';

const Inputs = ({ fields }) =>
  fields.map((field, index) => (
    <div key={index} className='input-box'>
      <label>{field.label}</label>
      <input
        className='input'
        type={field.type}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
      />
      {field.error && <p className='error'>{field.error}</p>}
    </div>
  ));

export default Inputs;
