import NavBar from '../../components/basics/navbar';
import Footer from '../../components/basics/footer';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';


import './styles.css';

import logo from '../../assets/images/sisgdd_logo.png';


const Home: React.FC = () => {
  

  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="conteudo">
        <div className="contentl">
          <h1>Sistema de Geração de Roteiro de Jogos</h1>
          <p>Geração de Roteiros de Jogos (Game Design Document) a partir de um modelo e as relações específicas com o gênero do jogo.</p>
          <div className="acesso">
          
          <Link to="/genero">
            <span>
            <FiLogIn size={32} color="#111111" />
            </span>
            
            <strong>Acessar o sistema!</strong>
          </Link>
          </div>
        </div>
        <div className="contentr">
          <img src={logo} alt="Geração de GDDs" />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;

