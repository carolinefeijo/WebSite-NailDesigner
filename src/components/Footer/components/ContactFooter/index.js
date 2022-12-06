import React from "react";
import "./styles.css";

export const ContactFooter = ({ name, subTitle }) => {
  return (
    <div className="contact-details-container">
      <ul>
        <li>
          <p className="p-contact"> {name}</p>
        </li>

        <li>
          <p className="p-contact"> {subTitle}</p>
        </li>
      </ul>
    </div>
  );
};
