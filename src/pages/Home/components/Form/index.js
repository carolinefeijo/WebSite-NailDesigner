import React from "react";
import { useState } from "react";
import "./styles.css";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="form-container" id="contact">
      <h2 className="title-h2">Vamos Conversar? </h2>
      <h6 className="title-h6">Me envie uma mensagem !</h6>

      <form className="form" onSubmit={() => {}}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Seu telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          className="message"
          type="text"
          id="message"
          name="message"
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <input type="submit" value="ENVIAR" />
      </form>
    </div>
  );
}
