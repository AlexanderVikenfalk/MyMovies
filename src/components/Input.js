import React from 'react'

export default function Input(props){   
    return (
    <input  type="text"
    name="name"
    className="input"
    value={props.value} 
    onChange={ props.handleChange}
    />
    )
}
