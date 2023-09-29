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
    <h1 className="display-4 fst-italic text-center">Controles</h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">Os controles referem-se aos elementos e mecanismos utilizados para permitir que os jogadores interajam e controlem o jogo.
      Ao se pensar em controles é necessário que você imagine todas as possibilidades que podem ser controladas pelos usuários, para que assim você possa 
      definir como o jogador irá acessa-la, para isso, você pode separar os controles em comandos essenciais, ou seja, comandos que devem ser executados rapidamente
      e provavelmente que serão utilizados com frequência, e comandos de baixa prioridade, como alterações nas configurações gerais ou possibilidades especiais para o 
      jogador que requerem uma maior dificuldade para serem executadas. Normalmente jogos em determinadas ferramentas possuem semelhanças entre seus
      controles e comandos, isso por que além do calculo de prioridade e acesso, algo essencial para controles é que os mesmos não sejam contra-intuitivos.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Controles são muito importantes dentro do seu jogo, é recomendado que você se baseie em jogos que possuem funções semelhantes ao seu,
                    e analise o quão satisfatório são seus controles. Lembre-se que os controles são possibilidades que estão externas ao jogo, ou seja, o jogador
                    não deve se preocupar muito em como os comandos devem ser utilizados, dessa forma, normalmente se tratam de controles que são de fácil execução, 
                    a não ser que isso seja um fator dificultador do jogo, como acontece em jogos arcade que os combos de ataque mais poderosos são difíceis de executar. 
                    Lembre-se de considerar o dinamismo e velocidade do jogo, a plataforma e o estilo de jogo. 
                  
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
