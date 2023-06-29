import React from 'react'
import Navbar from './../NavBar/NavBar.jsx'

export default function PatientLogin(props) {
  return (
    <div>
      <Navbar authType={props.authType} setAuthType={props.setAuthType} />
    </div>
  );
}
