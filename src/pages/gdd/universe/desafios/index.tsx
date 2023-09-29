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
    <h1 className="display-4 fst-italic text-center">Desafios</h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3"> É claro que existêm os desafios referentes as dificuldades enfrentadas relacionadas a mecanica de jogo, mas não é sobre esses desafios
      que iremos abordar agora, não relacionado a mecanica de jogo em si, apesar de poder ter relação. Os desafios, são referentes as dificuldades com que o personagem 
      do jogo enfrenta, em um jogo de corrida, por mais que o mesmo não tenha um foco na narrativa, de acordo com o universo preparado, um dos desafios dentro do universo
      seria o de ganhar as corridas, enquanto em um jogo focado na narrativa, um dos grandes problemas do jogo com certeza estaria atrelado aos pequenos objetivos do personagem
      e o desfecho final. Portanto, os desafios são os problemas que constantemente aparecem para confrontar de forma direta ou indireta o personagem principal da obra.
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Os desafios podem ser diversos, e dependem do contexto em que o jogo se encontra, de modo geral, uma boa forma de definir os desafios do universo em si, 
                    é começar do mais amplo até os desafios especificos. Começe descrevendo os problemas em que o universo se encontra, como falta de recursos por conta de uma guerra,
                    ou a falta de informação dentro de uma casa abandonada, e partindo disso você pode pensar em desafios mais especificos por exemplo em um jogo de futebol, um desafio
                    relacionado ao universo talvez seja na dificuldade de equilibrar o time com os recursos, ou até mesmo a dificuldade de ultrapassar jogadores sem ser encurralado, 
                    necessitando assim de que você proporcione uma possibilidade nova dentro de campo. Não importa os desafios que o universo contenha, de um jeito ou de outro, isso faz você
                    pensar em formas especificas para problematizar ou solucionar aquele problema, como um objetivo do jogo e do jogador.
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
      <p className="lead my-3 ">Desafios</p>
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
