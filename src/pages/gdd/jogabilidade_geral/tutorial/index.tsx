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
    <h1 className="display-4 fst-italic text-center">Tutorial</h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">Um fator importante de todo jogo é seu tutorial, jogos que não possuem um tutorial explicito tendem a ter a necessidade 
      de serem explicado por outras pessoas, a não ser que um dos atrativos seja a dificuldade de aprendizado, um tutorial pode funcionar de diversas 
      formas, e aparecendo em momentos diferentes com o decorrer do jogo, ou não. O importante é você pensar em como as pessoas ao se depararem com 
      algo novo, como elas vão aprender, e com que velocidade devem aprender, os respectivos controles e mecanicas presentes em seu jogo.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    No começo do jogo, normalmente é apresentado a forma mais básica de se jogar, cuidado pois tutorial serve
                    para ensinar as mecanicas básicas de um jogo. Um tutorial nunca deve ser dificil, com excessões de jogos que 
                    apresentam um tutorial com o intuito de treinar, ou chocar o jogador mesmo no inicio, normalmente o tutorial 
                    serve para que o jogador consiga jogar e saber o que fazer diante das situações. Entenda que o aprendizado e inovação
                    podem se tornar um diferencial na emoção do jogador por ter se "superado", portanto, tome cuidado para não acabar com essa
                    sensação especial. Outra coisa para se preocupar e com o fator de "ensinar em excesso" muitos jogos possuem tutorias intuitivos 
                    que sequer aparentam ser tutoriais, isso por que o tutorial é apresentado de uma forma dinamina e não muito explicita,
                    você pode ensinar seu jogador de pouco a pouco conforme a dificuldade aumenta. Em jogos de luta apesar de eles não exigirem que 
                    você realize todos os combos, normalmente possuem uma lista com a diversidade de combos para que o jogador possa tentar, entenda 
                    que existe uma linha tênue entre o intuitivo e o pouco provável, normalmente você não pode esperar que jogadores no geral descubram o
                    que é "intuitivo" para você.
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
