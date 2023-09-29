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
    <h1 className="display-4 fst-italic text-center">Conceito da Jogabilidade </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3">A jogabilidade é um dos elementos centrais de um jogo e representa a experiência interativa que os jogadores têm ao interagir com o jogo. 
      Refere-se às mecânicas, regras, controles e interações que definem como o jogo é jogado e quais desafios e objetivos os jogadores encontram durante o processo.
      Dessa forma, o conceito da jogabilidade pode ser definido como um resumo onde você explana as principais caracteristicas de seu jogo referentes as mecânicas do mesmo,
      quais serão os elementos com os quais será possível de seus jogadores interagirem, e que tipo de resposta isso trará para sua experiência momentânea ou ao longo de seu percurso.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    O jogo possui uma mecânica simples de se esquivar de projecteis que são lançados contra o personagem, a medida que o tempo passa
                    os desafios vão ficando mais difíceis, O foco desse jogo será apenas se esquivar de tudo o que for possível, dessa forma o jogador contará com apenas os controles
                    referentes a movimentação, e com um botão de habilidade especial, que servirá para facilitar em algumas cirscustâncias no combate.
                    Com relação aos inimigos, os projecteis terão velocidades variadas, e não serão destruídos a menos que encostem no jogador causando dano ou que saiam da tela.
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
