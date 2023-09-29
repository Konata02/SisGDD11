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
    <h1 className="display-4 fst-italic text-center">Personagens </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">Algo importânte de se realizar ao desenvolver um universo e uma história, é descrever a respeito dos personagens.
      Quem eles são dentro da história e do universo, como eles pensam e reagem às situações, lembre-se que personagens incluem tnato o protagonista principal, 
      quanto o inimigo mais irrelevante da história. Descrever os personagens te ajuda a entender as relações que aquele personagem tem com o resto do mundo.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Para definir os personagens é interessante a principio pensar nas relações que esse personagem tem com outros personagens e com o contexto envolvido.
                    Pode começar com tópicos basicamente, titulos, após isso você irá começar a perceber a relevancia de que o personagem em si possuí na história e mais 
                    e mais detalhes são adicionados. Pode começar inserindo afirmações básicas, como Paterson é um velho chato que cuida da Dona Olinda, depois você irá 
                    perceber onde esses personagens encaixam de acordo com a sua posição na história. 
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
      <p className="lead my-3 ">Personagens</p>
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
