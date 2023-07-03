import React from "react";
import Upper from "./Upper";
import Down from "./Down";
import ContactUs from "./ContactUs";

export default function Footer() {
  return (
    <div className="px-4 py-10 text-white bg-custom-accent" id="ContactUs">
      <Upper />
      <ContactUs />
      <Down />
    </div>
  );
}
