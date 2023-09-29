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
    <h1 className="display-4 fst-italic text-center">Progressão do Jogo </h1>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3"> A progressão pode ser definida como a alteração que seu jogo sofre ao longo de seu decorrer. A medida que seu jogador avança no jogo desenvolvido,
      é necessário que ele sinta uma mudança em desenvolvimento, algo que não torne o jogo tedioso por se tratar de algo monótono. Normalmente, isso interage principalmente com a dificuldade do jogo, 
      mas não só isso, existem várias possibilidades dentro da progressão de um jogo, como considerar que a medida que a história avança, ela vai se tornando mais drástica de modo que isso faz o jogador 
      continuar intrigado para experenciar seu final. Progressão é muito parecida com o fluxo do jogo, entretanto fluxo do jogo é uma parte mais técnica, enquanto progressão é uma análise geral, 
      uma reflexão de vários fatores que chegam a evoluir/mudar, com o passar de seu jogo.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                  Apesar de muito se confundir sobre fluxo do jogo e progressão, eles com certeza não estão separados, por exemplo Mesmo em jogos que aparentemente 
                  não mudam muito sua jogabilidade ao longo do jogo, possuem uma progressão, como exemplo, xadrez que  com o decorrer do jogo as peças vão acabando, 
                  diminuindo a quantidade de caminhos que você pode desenvolver para derrotar seu adversário. Isso é realmente o fluxo do jogo do xadrez, contudo também 
                  é sua progressão, o principal é você perceber que conforme o jogo avança algo acontece, que prende o jogador em sua jogabilidade, dito isso progressão
                  pode ser influenciada por fatores que não só estão relacionados a jogabilidade como fluxo de jogo. Como trilha sonora, um jogo pode tender sua trilha 
                  sonora para algo mais deprimente a medida que a história avança, mudando os sentimentos conforme o jogo passa, a dificuldade de um jogo tende a aumentar 
                  conforme o jogo se passa, isso por que a medida que os jogadores realizam ações semelhantes, com o passar do tempo eles se tornam mais experientes, 
                  e consequentemente o jogo tenderia a ficar mais facil com esse fator, o que tornaria o jogo tedioso com o passar do tempo por ser "facil demais". 
                  A progressão se preocupa com as sensações que o jogador deve sentir com o passar do jogo, de forma que ele jogue até o ponto desejado.
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
