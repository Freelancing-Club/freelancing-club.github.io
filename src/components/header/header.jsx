import React from "react";
import "./header.scss";

const sections = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "events",
    label: "Events",
  },
  {
    id: "comittee",
    label: "Committe",
  },
  {
    id: "contactUs",
    label: "Contact Us",
  },
];
const Header = () => {
  return (
    <header>
      <nav>
        {sections.map(({ id, label }) => {
          return (
            <div key={id}>
              <a href={"#" + id}>{label}</a>
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
