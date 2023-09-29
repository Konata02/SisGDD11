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
    <h1 className="display-4 fst-italic text-center">Recursos </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">É essencial que você possua noção de quais recursos você tem no inicio do projeto, pois isso 
      te trás uma noção do que você precisará ao longo de todo projeto, desde contratações até compra de recursos especificos 
      como assets ou ferramentas pagas.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Recursos necessário podem ir desde de assets simples os quais você compra na internet até o trabalho de um artista por exemplo,
                    é necessário avaliar o peso do que queremos produzir e do que possuímos em mãos, para que assim seja possível avaliar quanto custo
                    os desenvolvedores pretendem gastar. Assets por exemplo podem subistituir a função de uma pessoa que trabalha com modelagem 3d, entretanto
                    é necessário avaliar que provavelmente você não terá como improvisar nesse aspecto, pedir alterações etc, nesse caso os desenvolvedores
                    estariam sujeitos a se adequar às limitações do asset especifico, ou contrarar alguem qualificado, julgando que os desenvolvedores já não
                    possua uma pessoa com a experência necessária para executar as requisições.
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
      <p className="lead my-3 ">Recursos necessários</p>
      <div className="container-text">
        <textarea className="full-width px-0"></textarea> 
      </div>

      <p className="lead my-3 ">Recursos que se possui</p>
      <div className="container-text">
        <textarea className="full-width px-0"></textarea> 
      </div>
      
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
