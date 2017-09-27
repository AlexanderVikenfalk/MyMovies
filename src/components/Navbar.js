import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import InputField from './InputField.js'
import SelectForm from './SelectForm.js'

export default function MainButton(props){   
    return (
        <Navbar className="Navbar">
           <Navbar.Header>
            <div className="header-text">
                <h1 >Example movie list </h1>
            </div>
            </Navbar.Header>
            <div classname="row">
            <div className="mx-auto">
          <InputField />
          <SelectForm />
          </div>
          </div>
      </Navbar>
    );
}
