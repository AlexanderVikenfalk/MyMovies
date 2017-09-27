import React from 'react';
import {Input} from 'react-bootstrap';

function InputField(props) {
  return (
        <input
        type="text"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder="Filter Movie"
        />
      
  );
}
export default InputField;
