import React from "react";
const time = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>copyright © {time}</p>
    </footer>
  );
}
export default Footer;
