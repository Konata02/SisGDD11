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
    <h1 className="display-4 fst-italic text-center">Ambiente do Jogo </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">O ambiente do jogo se diz por onde a trama do jogo se passa, é um ponto chave na definição do universo em si, o qual você se preocupa 
      com onde todo o jogo está se passando, ao se definir o ambiente do jogo você estará preocupado em como os cenários serão ao longo do jogo. Você deve cogitar 
      as mudanças ao longo das cenas, o contexto por trás dela e relacionar esse ambiente com tudo que ele pode estar relacionado. Dependendo das circustâncias 
      o ambiente pode vir a se tornar um diferêncial para outros fatores artisticos e até mesmo mecânicos como o design do mapa em si que pode relacionar diretamente
      na jogabilidade do jogo.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    O ambiente advém de um contexto escolhido, portanto é um elemento de design que é bom você considerar julgando como será a relação do ambiente com a arte no geral, 
                    o ambiente pode ser relacionado com a musica as cores e também com a narrativa em questão. Para se definir o ambiente você pode começar com pequenas caracteristicas que são 
                    essenciais de serem relacionadas com outros fatores relevantes, como os sentimentos esperados "Já que é relacionado com uma ideia de nostalgia do personagem será retratado como algo
                    poético e divertido", musica, narrativa etc. O ambiente em questão é algo que dificilmente será alterado com o desenvolver das ideias, portanto é importante que você topicalize 
                    a importância do cenário no desenvolvimento, para que não haja necessidade de alterações futuras.
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
      <p className="lead my-3 ">Ambiente do Jogo</p>
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
