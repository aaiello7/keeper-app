import React from "react";

let date = new Date();
let year = date.getFullYear();

var Footer = () => (
    <footer>
        <p>Copyright {year}</p>
    </footer>
)
export default Footer;