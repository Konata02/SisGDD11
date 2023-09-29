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
    <h1 className="display-4 fst-italic text-center">Referências para o jogo</h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">As referências são um ótimo ponto de partida para o desenvolvimento de jogos digitais, isso porque,
      a partir delas, podemos perceber erros e acertos de outras obras das quais pretendemos nos basear, é interessante ter uma visão
      "final" de como nosso jogo deveria ficar, quais fatores poderiam ser "melhorados" com base em outras experiencias. Dito isso, é
      importante que tenhâmos em nosso entendimento do que se trata uma referência para não nos limitarmos mais do que o necessário,
      basicamente referência é tudo aquilo que podemos puxar como base para desenvolver quaisquer fator relevante dentro de desenvolvimento,
      sejam obras literárias, animações, e até mesmo brincadeiras do cotidiano. Tudo vale, desde de essa referência sirva para te ajudar
      no desenvolver do trabalho e não o contrário.
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Apesar de que referências podem vir de quaisquer ideia. É muito importante que você saiba organiza-la, além de claro,
                    verificar realmente sua relevância para o jogo o qual você deseja desenvolver. Também vale ressaltar que as melhores
                    referências são projetos com uma certa semelhança com o produto final, estou falando de jogos parecidos com os quais você
                    irá desenvolver. É bom extrair de tudo um pouco, desde de opiniões dos desenvolvedores, de streamers e até mesmo de jogadores.
                    Obviamente você não precisa acreditar apenas naquilo que as outras pessoas falam, você mesmo pode chegar a verificar fatores
                    presentes nas referências as quais você devidamente deverá se preocupar como universo, jogabilidade e arte.
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
