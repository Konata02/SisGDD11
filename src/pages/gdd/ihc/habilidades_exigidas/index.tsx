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
    <h1 className="display-4 fst-italic text-center">Habilidades Exigidas </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">Algo extremamente relevante para se levar em conta o desenvolvimento de um jogo é analisar quais as caracteristicas necessárias para se jogar seu jogo,
      isso faz com que você considere as necessidades dos jogadores e inclusive as habilidades menos relevantes. Ao analisar o que o jogador precisa você acaba por definir o quais são 
      as habilidades que são necessárias para as mais diversas circustâncias, isso te ajuda a balancear o seu sistema, de modo que você analise se o que você está desenvolvendo realmente
      estão de acordo com esperado.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Um jogo que exige mais reflexo para ser jogado, normalmente vai atrair um público-alvo que gosta e está previamente habituado a essas caracteristicas, mas caso
                    seu jogo utilize puzzles como um entretenimento secundário pode não ser uma boa ideia desenvolver puzzles muito difíceis, é necessário lembrar que todo jogo possui 
                    suas prioridades e conforme essas prioridades você acaba treinando e habituando seu jogador a aquele estilo de entretenimento, caso você não releve com atenção
                    as habilidades que você está exigindo do jogador você pode acabar por quebrar sua expectativa, ou criar um momento no jogo que é comumente mau visto pela maioria.
                    Não necessáriamente você deve exigir apenas uma habilidade do jogador, mas cogitar todas elas e julgar o quão importante são, pode fazer com que você perceba erros 
                    dos quais você prefira evitar.
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
      <p className="lead my-3 ">Conceito da Jogabilidade</p>
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
