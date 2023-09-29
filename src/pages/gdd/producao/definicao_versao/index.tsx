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
    <h1 className="display-4 fst-italic text-center">Definição das Versões </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">As versões do jogo são importantes para que você consiga medir o nível de prioridade dos fatores desenvolvidos, 
      normalmente jogos são desenvolvidos julgando versões especificas de desenvolvimento, como alpha, beta e versão final. Contudo não necessáriamente
      você precisa definir apenas essas versões, você pode definir versões com base no que se espera que esteja pronto, como a base das mecânicas, os cenários 
      e vários outros fatores.
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Para definir uma versão basta que você estipule uma meta cumprida até determinado momento, você pode usar as versões como marcos 
                    especificos para determinar o que ainda precisaria de alterações, e o que de fato ja deveria estar pronto até determinado momento.
                    Como exemplo, implementar as mecânicas básicas mas sem ter certeza de que os elementos estão devidamente balanceados, o que propriamente
                    ja deveria estar pronto até esse ponto? E o que certamente ainda precisa de uma atenção especial? Com certeza são diversos fatores, contudo
                    pontua-los se mostraria ideal para um projeto.
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
      <p className="lead my-3 ">Definição das Versões</p>
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
