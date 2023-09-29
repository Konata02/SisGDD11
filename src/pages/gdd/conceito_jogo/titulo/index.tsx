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
      <Sidebar />
      <header>
      
    <div className ="about-container p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <h1 className="display-4 fst-italic text-center">Título do Jogo </h1>
    
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">O titulo do jogo está atrelado a uma identificação imediata, é necessário entender que o título possui uma função
      simples de fazer com que aquele nome seja intrigrante o suficiente para que a pessoa lembre facilmente depois, o título pode ser relacionado
      a obra em si, pode instigar dúvida com relação a um mistério, fazer referência a um elemento presente dentro do jogo, o nome do protagonista,
      ou uma reflexão. Na verdade não existe restrições para um título, contudo, é preferível que ele seja pequeno e que represente seu jogo de alguma
      forma. O titulo é como as pessoas vão se referir ao seu jogo, também é responsável por uma das primeiras impressões de seu jogo.
      </p>   
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    O titulo pode estar atrelado a diversos fatores, não existindo uma limitação realmente, um jogo de luta por exemplo poderia possuir um titulo relacionado 
                    ao motivo dos participantes estarem disputando ali "É preciso matar para sair" Esse título pode parecer um pouco grande portanto poderiámos diminuir um pouco,
                    "Matar para sair", dependendo do público-alvo, talvez a palavra não seja muito adequada, dessa forma poderia ficar "Lutar e Sair", Um jogo de aventura poderia
                    ter um titulo atrelada a região de exploração Londownfair, o primeiro exemplo pode ser relacionado a uma palavra de impacto e fácil de se lembrar, ja o ultimo
                    estaria atrelado a uma caracteristica única do jogo, ambos são estratégias válidas, cabe você decidir o que seria mais adequado.
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
      <p className="lead my-3 ">Título do Jogo</p>
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
    </header>
    </div>

  );
}
export default GDD;
