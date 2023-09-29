import './styles.css'
import Sidebar from '../../../../../components/basics/sidebar';
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
    <h1 className="display-4 fst-italic text-center">Regras e Limitações</h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">As mecanicas de seu jogo estão relacionados com as regras, interações e sistemas que regem a jogabilidade de seu jogo
      promovendo um dinamismo e divertimento, estas são as principais relações de seu jogador com o jogo em si, que ocasionam em decisões especificas 
      do jogador para que ele possa perceber o que de fato ele tem controle e o que não tem, dentro do jogo. Na definição das mecânicas você estará 
      buscando definir os desafios dentro do jogo, os objetivos esperados e possibilidades, e a progressão do jogador em vários fatores enquanto ele 
      interage com o jogo em questão. 
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                   Existem vários elementos os quais podem ser relacionados com a mecânica de jogo, sendo relevantes os que forem mais adequados
                   para o estilo de jogo pretendido, bons exemplos seriam definir a fisica do jogo, sistema de combate, movimentação dos personagens,
                   manipulação de recursos, interação com o ambiente e personagens, definição de progressão, tais como objetivo, aprendizado e recompensas.
                   Entenda que particularmente, mecanica de jogo é o elemento que você deve se preocupar para que o sistema de seu jogo funcione devidamente.
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
      <p className="lead my-3 ">Mecanicas do Jogo</p>
      <div className="container-text">
        <textarea className="full-width px-0"></textarea> 
      </div>
      
    </div>
    </div>
    <div className="container-buttons">
            
            <Link to="/balanceamento">      
                <Button className="custom-button" onClick={handleClick}>
                    Balanceamento
                </Button>
            </Link>
            
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
