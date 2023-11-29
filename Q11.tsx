import { useState } from "react";

function FormularioCadastro() {
  const [nome] = useState("");
  const [email] = useState("");

  return (
    <form>
      <label htmlFor="nome">Seu nome:</label>
        <input type="text" id="nome" value={nome} onText={event => {
          nome = event.target.value;
        }} /
          <label htmlFor="email">Seu e-mail:</label>
            <input type="email" id="email" value={email} onText={event => {
              email = event.target.value;
          }} />
      </form>
  );
}

function App() {
  return (
    <div className="container">
      <h2>Cadastre-se</h2>
      <FormCadUser />
    </div>
  );
}
