import React from "react";
import "./styles.css";

import { DetailsFooter } from "../Footer/components/DetailsFooter";
import { TagsFooter } from "./components/TagsFooter";
import { ContactFooter } from "./components/ContactFooter";
import TeamSociais from "../TeamSociais";
import { Midias } from "../Midias";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main-position">
        <DetailsFooter />
        <TagsFooter />
        <ContactFooter
          name={"RIO GRANDE-RS"}
          subTitle={"ATENDIMENTO A DOMICÍLIO"}
        />
        <ContactFooter
          name={"+55 53 9241-4581"}
          subTitle={"LIZIANESILVA@GMAIL.COM"}
        />

        <Midias />
      </div>
    </div>
  );
};
