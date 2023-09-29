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
    <h1 className="display-4 fst-italic text-center">Trilha Sonora </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">A trilha sonora é um elemento crucial para desenvolver a experiência do jogador e enriquecer o universo do jogo. Uma música adequada pode 
      elevar a qualidade do jogo, cativar os jogadores e criar uma experiência mais imersiva e envolvente. Quando abordamos sobre trilha sonora, estamos falando de todos os sons
      até mesmo os mais imperceptíveis, quando se assiste uma animação, além da trama, se você prestar atenção existêm sons de fundo, musicas, o som dos impactos e etc, na verdade 
      na falta de alguns desses elementos, aqueles que assistem, rapidamente recebem com estranheza, isso por que os sons são fatores comuns quanto respirar. Portanto é importante
      cogitar a trilha sonora de todo o jogo, tanto em pontos cruciais como apresentação de ambientes, ou momentos especificos, como também, sons que são relacionados a trazer o
      usuário a um estado de imersão por ouvir os passos dos personagens em um jogo de terror.
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    A trilha sonora em jogos pode ser utilizada de duas formas, a primeira é com relação a cena, esta serve para tornar-te imerso no cenário, com musicas traduzindo as emoções presentes, 
                    a fala dos personagens o som do vento soprando, o som dos passos do personagem, já a segunda forma, é a que se diz respeito aos feedbacks, se tratam de respostas imediatas que servem para 
                    notificar o jogador que algo está acontecendo, como sons que representam que uma pontuação foi alcançada, ou um som de vitória ao se completar uma missão ou realizar um marco,   em resumo, 
                    trata-se de sons que ocorrem devido à interação do jogador com algo. A partir desses fatores cabe você organizar quais são sons propicios a tocar em momentos especificos, como uma trilha 
                    bem calma em momentos de exploração que se alteram para uma  trilha sonora de combate quando há interação com inimigos. Use a trilha sonora como uma ferramenta de feedback, dando sons a passos, 
                    golpes realizados e até mesmo para simbolizar recompensas.
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
      <p className="lead my-3 ">Trilha Sonora</p>
      <div className="container-text">
        <textarea className="full-width px-0"></textarea> 
      </div>

      <div className="spacing-container"></div> 
              {showExample && (
                <>
                  <p className="px-0  ">Elementos relacionados a imersão do jogador, tais como, sons do ambiente, musicas temas, e até mesmo o andar do personagem</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'Elementos Adptativos'}
                  </Button></>
                             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'Elementos Adptativos'}
                  </Button>
              )}

      <div className="spacing-container"></div> 
                    {showExample && (
                      <>
                        <p className="px-0  ">Elementos com o proposito de dar uma resposta imediata de que algo aconteceu, como moedas sendo coletadas ou baús sendo abertos ou o som de largada.</p>
                        <div className="container-text">
                        <textarea className="full-width px-0"></textarea> 
                        </div>
                        <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                          {showExample ? 'Ocultar' : 'Elementos Interativos'}
                        </Button></>
                                  
                    )}
                    {!showExample && (
                        <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                        {showExample ? 'Ocultar' :'Elementos Interativos'}
                        </Button>
                    )}       
      
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
