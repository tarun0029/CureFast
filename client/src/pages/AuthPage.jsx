import React from 'react'
import PatientLogin from './../components/AuthPage/PatientLogin'
import PatientRegister from './../components/AuthPage/PatientRegister'
import DoctorLogin from './../components/AuthPage/DoctorLogin'
import DoctorRegister from './../components/AuthPage/DoctorRegister'

export default function AuthPage(props) {
  return (
    <div>
      {props.authType === "patientLogin" && (
        <PatientLogin
          authType={props.authType}
          setAuthType={props.setAuthType}
        />
      )}
      {props.authType === "patientRegister" && (
        <PatientRegister
          authType={props.authType}
          setAuthType={props.setAuthType}
        />
      )}
      {props.authType === "doctorLogin" && (
        <DoctorLogin
          authType={props.authType}
          setAuthType={props.setAuthType}
        />
      )}
      {props.authType === "doctorRegister" && (
        <DoctorRegister
          authType={props.authType}
          setAuthType={props.setAuthType}
        />
      )}
    </div>
  );
}
