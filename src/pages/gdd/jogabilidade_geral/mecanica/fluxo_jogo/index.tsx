import './styles.css'
import Sidebar from '../../../../../components/basics/sidebar';
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
    <h1 className="display-4 fst-italic text-center">Fluxo de Jogo </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3"> Fluxo do jogo pode ser entendido como um ciclo, ou em alguns jogos especificos, apenas uma progressão constante,
      todo jogo tem que possuir um estado de flow, que se define como sendo um equilibrio entre habilidades necessárias e nível dos desafios.
      é preciso entender como a sua jogabilidade funciona para proporcionar um estado de imersão para o jogador. Dito isso, definir o fluxo de seu jogo
      se resume em entender como ele vai funcionar como um todo conforme o jogador avançe no jogo. Em alguns jogos isso pode ser visto como uma formula 
      simples, de modo que a dificuldade dos desafios vai aumentando conforme o jogador percorre seu caminho, entretanto, o fluxo de seu jogo pode funcionar
      de uma forma muito menos intuitiva, abordando picos e quedas na dificuldade, ramificações e escolhas, exploração e recompensas. Você pode pensar 
      no sentido literal da palavra, como o seu jogo funciona com o passar dele, o que muda ou se mantém? É um percurso linear? ou abrangente, nesse caso
      quais necessidades seu jogo precisa para manter seus jogadores entretidos? O que torna seu jogo intrigante que faz com que os jogadores continuem a jogar?
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                   Basta que você pense como funciona o seu jogo no geral, após isso você vai pontuar quais caracteristicas que você acredita
                   que fazem a diferença para esse fluxo, exemplo, antes vamos pensar de forma geral, em um jogo onde o objetivo é chegar até o final da fase,
                   e resolver puzzles para concluir seu objetivo, vendo de uma forma geral, podemos perceber que necessáriamente precisa ter algum desafio,
                   um dos desafios é o design do mapa, mas isso não diz respeito a jogabilidade em si, portanto outro fator que podemos pontuar que é de acordo
                   com a mecanica do jogo são o limite de tempo e os puzzles no ambiente, com o passar do tempo os puzzles vão se tornando mais dificeis, de modo
                   que isso crie uma noção de que o player precisa avançar o maximo possível enquanto o tempo ainda não está perto de acabar. Isso acaba por criar 
                   como será o fluxo do jogo. Talvez você confunda isso como enumerar os elementos que existam no seu jogo, entretanto o importante é você perceber 
                   como esses elementos da jogabilidade influenciam o fluxo do jogo, e se eles realmente criam um fluxo jogável e interessante.
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
      <p className="lead my-3 ">Fluxo do Jogo</p>
      <div className="container-text">
        <textarea className="full-width px-0"></textarea> 
      </div>

      <div className="spacing-container"></div> 
              {showExample && (
                <>
                  <p className="col-lg-6 px-0  ">Objetivo</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'Objetivo'}
                  </Button></>
                             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'Objetivo'}
                  </Button>
              )}
      <div className="spacing-container"></div> 
              {showExample && (
                <>
                  <p className="col-lg-6 px-0  ">Desafios e Inimigos</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'Desafios e Inimigos'}
                  </Button></>
                             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'Desafios e Inimigos'}
                  </Button>
              )}

      <div className="spacing-container"></div> 
              {showExample && (
                <>
                  <p className="col-lg-6 px-0  ">Recompensas</p>
                  <div className="container-text">
                  <textarea className="full-width px-0"></textarea> 
                  </div>
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                    {showExample ? 'Ocultar' : 'Recompensas'}
                  </Button></>
                             
              )}
              {!showExample && (
                  <Button className="btn-bd-primary full-width-button" onClick={handleClick}>
                  {showExample ? 'Ocultar' :'Recompensas'}
                  </Button>
              )}                
      
    </div>
    </div>
    <div className="container-buttons">

            <Link to="/definicao_inimigos">      
                <Button className="custom-button" onClick={handleClick}>
                    Inimigos
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
