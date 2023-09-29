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
    <h1 className="display-4 fst-italic text-center">Conceito da História </h1>

    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">O conceito de uma história pode ser definido como um resumo geral do que se tratará a narrativa do jogo, de uma forma simples, 
      você pode começar a pensar no protagonista do seu jogo, humanoide ou não, em que contexto ele está inserido, a respeito disso você precisa apresentar
      o universo em que ele se encontra, e qual a sua situação atual dentro dele. A partir disso você pode definir qual seria o problema do protagonista 
      e qual seria seu objetivo final ou situação ideal. Essa é a base para o começo de qualquer história. Quanto mais você adicionar caracteristicas relevantes
      melhor o resumo ficará, após isso definido, basta que você relembre sempre dos pontos relevantes de sua história e os conecte de uma forma intrigante.
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    A história vai girar em torno de Io, uma garota que perdeu suas memórias, com intuito de recupera-la um médico irá induzi-la a um sono forçado
                    com o decorrer da obra, o jogador irá descobrir e decidir o que aconteceu no passado que esquecemos, dependendo dos acontecimentos, ao acordar  
                    Io estará disposta a continuar com o tratamento ou não. Com o passar da obra, vamos conhecer um pouco mais sobre Io e descobriremos tanto sobre 
                    o passado quanto sobre o presente; O médico está relacionado ao passado de Io mas esconde isso por alguns motivos; Os pais de Io não estão presentes na obra e estão relacionados ao passado; 
                    O preço do tratamento é relevante e é comentado no começo; O conceito da história apesar de ficticia vai apresentar diversos termos relacionados a realidade e também ao psicologico humano. 
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
      <p className="lead my-3 ">Conceito da História</p>
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
