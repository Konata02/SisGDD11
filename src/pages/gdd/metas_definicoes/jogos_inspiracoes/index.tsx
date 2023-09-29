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
    <h1 className="display-4 fst-italic text-center">Jogos e Inspirações </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">Um grande aliado do desenvolvimento de qualquer projeto, são as inspirações, as referências nas quais nos baseamos,
      analisando dessa forma, e muito importante que você compreenda que inspirações podem vir de qualquer coisa. Na criação de jogos, se inspirar em
      outras obras semelhantes se mostrará de extrema importância, mas não só isso, você deve obter como conteúdo vários elementos que podem ser relacionado
      com os temas desenvolvidos, podem vir de livros, jogos que não são virtuais, materiais de descrição, experiência real, entre outros fatores, Nessa seção
      você precisa ter em mente o que de fato você deseja fazer e se existem exemplos ou bases das quais você pode seguir para trata-las como um norte.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Realmente se inspirar em obras parecidas é um bom começo, portanto imaginar seus "concorrentes" poderia ser uma boa estratégia
                    você pode pega-los como referência não só sobre suas vantagens, também pode extrair muito de suas falhas, analisar outras obras 
                    te faz refletir propriamente do que você deseja realmente fazer. Um jogo de plataforma poderia ter como referência os jogos do Mario como exemplo,
                    um jogo que se passa em um universo ficticio porém baseaddo na grécia antiga, poderia ter como referência livros de história, enquanto um jogo de 
                    simulação e esporte como futebol, concerteza teria o esporte como referência. 
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
      <p className="lead my-3 ">Conceito da Jogabilidade</p>
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
