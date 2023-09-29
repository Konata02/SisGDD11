import './styles.css'
import Sidebar from '../../../../components/basics/sidebar';
import { useState } from 'react';

import { 
  Button
 } from 'reactstrap';
import { Link } from 'react-router-dom';


const GDD: React.FC = () => {

  const [showExample, setShowExample] = useState(false);

  const handleClick = () => {
    setShowExample(!showExample);
  };


  
  return (
    <div className ="container">
      <header>
      <Sidebar />
      </header>
      <body>

    
    
    <div className ="about-container p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <h1 className="display-4 fst-italic text-center"> Ordem de prioridade</h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3"> A ordem de prioridade é crucial para organizarmos um projeto. Particularmente em um projeto de um jogo digital a medida que o 
      processo de desenvolvimento vai avançando à a possibilidade de necessitarmos de outras partes do projeto para que possamos continuar. Por exemplo, 
      normalmente se mostrará uma estratégia inviável realizar o balanceamento do mapa sem um personagem teste com as mecanicas básicas funcionando, por outro lado,
      não convém criar caracteristicas especificas de NPCS sem saber as caracteristicas gerais da história principal, a não ser que a criação da história geral
      vá se adequar as caracteristicas especificas de NPC. Portanto definir quais os fatores precisam ser realizados antes dos outros com base em uma análise
      do que é necessário para que outros fatores sejam concluídos pode vir a se tornar uma vantagem essêncial no desenvolvimento de jogos.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Primeiramente, se nós queremos trabalhar com ordem de prioridade, temos de nos assegurar-mos que estamos comparando entre elementos de tipos semelhantes, seria estranho
                    você comparar algo como "atributos do personagem" e "finalização da demo", obiamente neste aspecto a finalização da demo tem de vir depois dos atributos do personagem terem 
                    sido criados, contudo isso particularmente não agreda nada além de estipular uma meta e não uma prioridade, ou seja, seria mais interessante você comparar fatores que são 
                    propriarmente de pesos "semelhantes" como exemplo dos fatores disponíveis para você criar o GDD, Mecânica de Jogo, Ambientação e Arte, Trilha Sonora, entre outros. Tenha cuidado
                    ao formar comparações óbvias que não necessitem de nenhuma análise para serem concluídas.
                  </p>
                  <Button className="btn-bd-primary" onClick={handleClick}>
                    {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                  </Button></>             
              )}
              {!showExample && (
                <Button className="btn-bd-primary" onClick={handleClick}>
                {showExample ? 'Ocultar Exemplo' :'Mostrar Exemplo'}
              </Button>
              )}
    </div>
    
    <div className="col-lg-6 px-0 ">
      <h1 className="display-4 fst-italic"></h1>
      <p className="lead my-3 ">Ordem de Prioridade</p>
      <div className="container-text">
        <textarea className="full-width px-0"></textarea> 
      </div>
      
    </div>
    </div>
    <div className="container-buttons">
            <Link to="/gdd">      
                <Button className="custom-button" onClick={handleClick}>
                    Salvar
                </Button>
            </Link>
    </div>
  
    </div>
    
    
  
   
    </body>
    </div>

  );
}
export default GDD;
