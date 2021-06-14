import React from "react";
import user from "../data/user";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchor = links.map(link => (
    <a key={link} href={"#" + link}>{link}</a>
  ))

  return <nav>
            {anchor}
          </nav>
}

export default NavBar;

