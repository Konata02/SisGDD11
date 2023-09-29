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
    <h1 className="display-4 fst-italic text-center">Arte</h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3"> Arte é um conceito abstrato e extremamente amplo. Quando desenvolvemos um jogo, diversos fatores podem ser influenciados 
      pela arte, principalmente os sentimentos dos jogadores. A arte do jogo está relacionada a todos as aparencias do jogo, desde de caracterização dos personagens até a interface
      do jogador em si. É necessário que a arte seja adequada a diversos outros elementos presentes no desenvolvimento do jogo, tais como trilha sonora, ambientação e narrativa por
      exemplo. Lembre-se que existem vários estilos de arte, a qualidade pode ser percebida em todas elas, o que mais impacta realmente são as combinações de fatores e não os graficos
      por assim dizer, normalmente, as diposição das cores na tela de forma organizada é o suficiente para prover sentimentos especificos.

    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Existem vários pontos a serem pontuados quando se descreve a arte, entretanto a parte reflexiva nunca é demais, você pode começar a pontuar 
                    os fatores mais importantes, sejam isso de uma forma simplificada ou não. Você pode abordar sobre sentimentos espeficicos ou temas para serem seguidos.
                    Como exemplo, o jogo de cartas em questão aborda sobre diferentes pontos da história, desse modo, cada cenário possuíra um design no fundo caracteristico 
                    relacionado a época da história, Pré-História, Antiguidade, Idade Média, Idade Moderna, cada um desses temas possuirá uma cor temática caracteristica, além de que
                    as cartas irão possuir estruturas como madeiras, pedras, colunas dóricas. A partir de várias caracterizações o design pode citar uma série de fatores como cores, elementos,
                    inspirações e varios outras caracteristicas que define como seria a arte esperada.
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
      <p className="lead my-3 ">Arte</p>
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
