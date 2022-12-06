import React from "react";
import "./styles.css";

import facebook from "../../assets/img/Redes/facebook.png";
import instagram from "../../assets/img/Redes/instagram.png";
import whatsApp from "../../assets/img/Redes/whatsApp.png";

export const Midias = () => {
  return (
    <div className="midias-container">
      <a href="https://www.facebook.com/profile.php?id=100004621325427">
        <img
          style={{ width: "35px", height: "35px", objectFit: "cover" }}
          src={facebook}
          alt="facebook"
        />
      </a>

      <a href="https://www.instagram.com/lizzy.n.a.i.l.s/">
        <img
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
          src={instagram}
          alt="instagram"
        />
      </a>

      <a href="https://wa.link/50yd6r">
        <img
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
          src={whatsApp}
          alt="whatsApp"
        />
      </a>
    </div>
  );
};
