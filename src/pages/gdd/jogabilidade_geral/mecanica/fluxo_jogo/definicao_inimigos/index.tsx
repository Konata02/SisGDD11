import './styles.css'
import Sidebar from '../../../../../../components/basics/sidebar';
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
    <h1 className="display-4 fst-italic text-center">Descrição dos Inimigos </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3"> Essa aba você irá utilizar para descrever seus inimigos em uma lista de forma que todo inimigo possuirá
      uma descrição, uma funções e habilidades e por fim comportamento.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                   Exemplo de Descrição de um Inimigo
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
      <p className="lead my-3 ">Descrição do Inimigo</p>
      <div className="container-text">
        <textarea className="full-width px-0"></textarea> 
      </div>

      <div className="spacing-container"></div> 
              {showExample && (
                <>
                  <p className="col-lg-6 px-0  ">Função</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'Função'}
                  </Button></>
                             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'Função'}
                  </Button>
              )}
      <div className="spacing-container"></div> 
              {showExample && (
                <>
                  <p className="col-lg-6 px-0  ">Comportamento</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'Comportamento'}
                  </Button></>
                             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'Comportamento'}
                  </Button>
              )}

      <div className="spacing-container"></div> 
              {showExample && (
                <>
                  <p className="col-lg-6 px-0  ">Habilidades</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'Habilidades'}
                  </Button></>
                             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'Habilidades'}
                  </Button>
              )}                
      
    </div>
    </div>
    <div className="container-buttons">

            <Link to="/gdd">      
                <Button className="custom-button" onClick={handleClick}>
                    Adicionar
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
