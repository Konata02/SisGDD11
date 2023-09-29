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
    <h1 className="display-4 fst-italic text-center">Cronogramas Estipulados </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">Estipular um tempo de conclusão para o projeto pode desempenhar um papel fundamental no planejamento, organização e controle do processo de criação do jogo.
      ajudando assim, a estabelecer metas claras, estimar prazos, alocar recursos e monitorar o progresso do projeto. É especificamente importante definir quanto tempo você imagina que irá 
      demorar para o desenvolvimento de certas metas, isso ajuda os desenvolvedores a aprender, e também se mostra como sendo uma solução para a conclusão do projeto, caso seja necessário 
      alterar algum aspecto. 
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Normalmente recomenda-se que grandes objetivos possuam um maior tempo para sua conclusão, entretanto é totalmente viável
                    estipular pequenas metas a serem alcançadas. Infelizmente é impossível adquirir noção de produção sem muita experiência ou um estudo qualificado
                    contudo além de estipular metas e definir-las é necessário que cumpramos a mesma
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
      <p className="lead my-3 ">Cronogramas Estipulados</p>
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
