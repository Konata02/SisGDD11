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
    <h1 className="display-4 fst-italic text-center">Ferramentas </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3"> Algo muito importante no desenvolvimento de qualquer projeto é saber o que você poderá utilizar
      para melhorar seu desenvolvimento, é interessante definir quais as ferramentas são possíveis de usar, seu custo de acordo 
      com o orçamento do jogo e até mesmo suas funções, caso se trate de uma opção e não de uma certeza. 
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Existêm várias ferramentas que podem auxiliar, aqui iremos contar com alguns exemplos de ferramentas gratuitas; Notion, para organização de documentos.
                    Jira para o gerenciamento do projeto; Audacity como um editor de audio; Unity, como plataforma de desenvolvimento de jogos; Figma, como ferramenta de 
                    design de interface; Github, para o compartilhamento de documentos. Esses são alguns exemplos de ferramentas que podem ser muito úteis no desenvolvimento 
                    de um jogo digital, entretanto é necessário pesquisar e analisar de acordo com o projeto, quais são realmente necessárias e quais ferramentas mais se adequam 
                    ao projeto.
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
      <p className="lead my-3 ">Ferramentas Necessárias</p>
      <div className="container-text">
        <textarea className="full-width px-0"></textarea> 
      </div>
      <p className="lead my-3 ">Ferramentas Cogitadas </p>
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
