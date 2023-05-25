import React from 'react';

const Inputs = ({ fields }) => (
  fields.map((field, i) => (
    <div key={i} className='input-box'>
      <label>{field.label}</label>
      <input className='input' type={field.type} name={field.name} value={field.value} onChange={field.onChange} />
      {field.error && <p className='error'>{field.error}</p>}
    </div>
  ))
);

export default Inputs