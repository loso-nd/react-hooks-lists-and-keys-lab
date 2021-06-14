import React from "react";
import user from "../data/user";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
            <a key={user}  href="#home">Home</a>
            <a key={user}  href="#about">About</a>
            <a key={user}  href="#projects">Projects</a>
          </nav>
}

export default NavBar;
