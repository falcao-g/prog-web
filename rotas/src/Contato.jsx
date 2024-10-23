import React from "react";
import "./Contato.css";
import { Link } from "react-router-dom";

function Contato() {
  return (
    <div>
      <h1>Contato</h1>
      <span>Aula de programação Web</span>
      <form>
        <label>
          Nome:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Mensagem:
          <textarea name="message" />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <br /> <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/">Home</Link>
    </div>
  );
}

export default Contato;
