import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem vindo a página HOME</h1>
      <span>Aula de programação Web</span> <br /> <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Home;
