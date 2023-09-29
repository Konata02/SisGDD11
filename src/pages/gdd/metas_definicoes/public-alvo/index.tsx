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
    <h1 className="display-4 fst-italic text-center">Público-alvo </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">O público-alvo é um fator muito importante que pode definir várias mudanças no curso do projeto, dessa forma é muito bom que o mesmo
      seja cogitado o quanto antes, com o público-alvo bem definido é possível pesquisar tendências adequadas para se implementar um jogo. Nunca é possível agradar a todos,
      considerar um público-alvo de grande amplitude significa que você deverá implementar fatores gerais de uma forma ideal para se adequar ao gosto da maioria, enquanto um 
      público-alvo centrado pode te possibilitar descartar algumas possibilidades dentro do desenvolvimento. O seu alvo não necessáriamente precisa ser uma faixa etária, ou um
      sexo definido, você pode priorizar qualquer coisa que você considere relevante de se saber a respeito do público escolhido.    
      </p>
           
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                  Existêm várias caracteristicas diversas entre pessoas, tanto caracteristicas mais gerais quanto específicas. O que você precisa saber é nortear suas prioridades.
                  Você pode até pensar pelo contrário, que tipo de pessoas estariam interessados na ideia apresentada inicialmente com base nos conceitos escritos sobre o jogo?
                  Você pode priorizar estilos de jogadores "exploradores e acumuladores" por exemplo,  personalidades especificas como "Amantes de romance" e até mesmo
                  funções sociais especificas como "estudantes de cursos superiores", Qualquer coisa é valida, você pode até mesmo cogitar um público-alvo especifico com base 
                  em algum jogo que você está se baseando para a criação do seu próprio.
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
      <p className="lead my-3 ">Público-alvo</p>
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
