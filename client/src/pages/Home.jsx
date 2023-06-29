import React from 'react'
import Testimonials from "./../components/Testimonials/Testimonials";
import Footer from "./../components/Footer/Footer";
import NavBar from "./../components/NavBar/NavBar";

export default function Home(props) {
  return (
    <>
      <NavBar authType={props.authType} setAuthType={props.setAuthType} />
      <div className="bg-red-500 h-[100vh]"></div>
      <Testimonials />
      <div className="bg-red-500 h-[100vh]"></div>
      <Footer />
    </>
  );
}
