import React from 'react';

export default FieldForm = (type, name) =>{
  return (
    <input type={type} name={name} onChange={(e) => {handleInputChange(`${name}`, e) }} />
  )
}