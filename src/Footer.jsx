import React from "react";

function Footer(){

    const name = "Fernand Fermin"
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>©{currentYear} Created by {name}</p>
        </footer>
    );
}

export default Footer;