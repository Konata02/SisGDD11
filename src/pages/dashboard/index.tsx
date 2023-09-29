import Sidebar from "../../components/basics/sidebar"
import logoImage from '../../assets/images/gds.png'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const dashboard: React.FC = () => {
  

  
  return (
    <div className="container">
      <Sidebar />
      <h1 className="text-primary py-3"> Dashboard do Sis GDD</h1>
      <div className="d-flex flex-column align-items-center">
          <img src={logoImage} alt="Geração de Roteiros" className="my-3" /> 
      </div>
      
      <div className="container">
        <h2 className="text-primary py-3"> Generos Selecionados:  </h2>
        <h3 className="text-primary py-4">   
        {(Number(localStorage.getItem ('aventura'))) === 1 ? "Aventura" : ""} <br/>
        {(Number(localStorage.getItem ('acao'))) === 1 ? "Ação" : ""} <br/>
        {(Number(localStorage.getItem ('corrida'))) === 1 ? "Corrida" : ""} <br/>
        {(Number(localStorage.getItem ('esporte'))) === 1 ? "Esporte" : ""} <br/>
        {(Number(localStorage.getItem ('estrategia'))) === 1 ? "Estratégia" : ""} <br/>
        {(Number(localStorage.getItem ('quebra'))) === 1 ? "Quebra-Cabeça" : ""} <br/>
        {(Number(localStorage.getItem ('ritmo'))) === 1 ? "Ritmo" : ""} <br/>
        {(Number(localStorage.getItem ('simula'))) === 1 ? "Simulação" : ""} <br/>
        {(Number(localStorage.getItem ('rpg'))) === 1 ? "RPG" : ""}
        
        
        </h3>
         
      </div>
      
      <div className="d-flex flex-column align-items-center">
      <Link to="/gdd">
          <Button className='GerarRoteiro' color="info">
            Iniciar o Processo
          </Button>
        </Link> 
      </div>
      


    </div>
  );
}

export default dashboard;