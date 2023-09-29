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
    <h1 className="display-4 fst-italic text-center">Narrativa</h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">A criação de uma história pode ser de extrema relevância dependendo do tema em questão, dependendo 
      do genero do jogo, uma narrativa é criada de uma forma que você sequer comente sobre ela, os próprios jogadores a criam, ou seja,
      história é algo que em determinadas situações nós consideramos essêncial para aceitarmos o contexto do jogo. É comum que nós como 
      seres pensantes desenvolvemos questionamentos a respeito de várias perguntas como: Onde estou; Quem eu sou; Por que estou aqui; 
      Para onde devo ir; Qual meu objetivo; O que me impede; E a principal palavra que usamos para questionamentos, Por que ? Uma narrativa
      é construída a partir da introdução de um personagem que está em um universo, o qual possui um proposito, por mais misteriosa que seja a história
      eventualmente uma série de pergutas comumente são respondidas, entretanto no começo vários questionamentos podem ser respondidos com eu não sei,
      onde o jogador provavelmente vai procurar entender posteriormente o que atualmente ele não sabe.

    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Apesar de muitos acharem que um dos grandes problemas na criação de uma narrativa é o começo, isso não necessáriamente é verdade
                    uma história devidamente deve ser inserida em um universo, o que chamamos de contexto, contexto é tudo aquilo que rodeia os fatores
                    principais da história, por que as coisas ocorrem, onde a história se passa, quem são as pessoas em volta, que bichos são esses, por que 
                    essas árvores são vermelhas, etc. Contudo, ao criarmos o contexto normalmente nos deparamos com o problema de querer explicar sobre tudo, 
                    e isso não é necessário para uma história, o importante é que você apresente as informações no momento certo. Um dos fatores mais importantes
                    que caracterizam histórias como "ruins" são os furos de roteiro. Um furo de roteiro é caracterizado como algo que você cria que contradiz o que 
                    você já tinha definido. Entenda que existem diferenças entre mentira e furo de roteiro. Você pode usar mentiras como uma ferramenta de mistério 
                    contudo isso é diferente de você definir um fator como verdadeiro. Em resumo, não importa que algumas coisas não possuam informação, elas naturalmente
                    obterão significados por conta das intuições dos jogadores mas serão tratados como mistérios(sem a certeza absoluta) para a narrativa em si,
                    de modo que você possa criar algo em cima daquilo que ainda não foi revelado. Por fim vale você caminhar com a história de forma gradativa
                    apresentando o universo e todas suas problematizações para o jogador.
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
      <p className="lead my-3 ">Narrativa do Jogo</p>
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
