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
    <h1 className="display-4 fst-italic text-center">Monetização</h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">Existêm várias formas de se gerar receita a partir de um jogo, essa escolha normalmente depende do tipo do jogo que está sendo produzido 
      e do público-alvo em questão, é muito importante que se pense em como gerar dinheiro com um jogo antes do mesmo ser produzido, pois isso por nortear drasticamente 
      algumas estratégias dentro do projeto. Um jogo dinamico e muito rápido com certeza não gostaria de quebrar o ritmo do jogador com propagandas, dessa forma a única 
      forma de implementar esse tipo de opção seria adicionar momentos especificos de descanso para o jogador onde ele teria a possibilidade de ver anúncios. Ou seja,
      é necessário pensar muito bem e decidir qual a melhor forma de lucrar com um jogo, ou pelo menos julgar qual as formas possíveis para que isso se torne realidade.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Para definir a monetização você precisa pensar principalmente no tipo de jogo desenvolvido e no público-alvo, entretanto
                    um fator muito importante na construção de qualquer projeto é com relação a sua manuntenção e no orçamento disposto para 
                    sua predução. Dentre as possibilidades de monetizar um jogo, você pode pensar em propagandas, vender uma cópia única ou expansões,
                    vender produtos que servem de aprimoramento dentro do jogo ou simplesmente customização, assinaturas com distribuidoras de jogos, anúncios
                    e até mesmo patrocionio. É preciso analisar qual tipo de monetização se adequa mais ao jogo.
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
      <p className="lead my-3 ">Monetização</p>
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
