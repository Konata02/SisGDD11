import './styles.css'
import Sidebar from '../../../../../../components/basics/sidebar';
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
    <h1 className="display-4 fst-italic text-center">Balanceamento </h1>
    <p className = "text-center"> Lembre-se o mais crucial em um jogo é a diversão, seja lá de que forma ela seja obtida. Sempre tenha em mente o usuário ao realizar suas decisões.</p>
    <div className = "row">
    <div className="col-lg-6 px-2">
      <p className="lead my-3"> Balanceamento é um fator crucial dentro do desenvolvimento de jogos digitais, ele é responsável 
      por deixar o jogador entretido e evitar que ele sinta a sensação de injustiça enquanto joga. Balancear basicamente se resume em 
      equilibrar atributos de forma que as circustâncias sejam justas conforme a situação do jogador mas não muito fáceis, dito isso, balanceamento pode 
      ser necessário em vários elementos presente nos jogos, desde o design dos mapas, até atributos referentes a um inimigo ou personagem. A principio
      é necessário que você identifique quais fatores podem ser alterados de forma a influenciar na jogabilidade do jogo, e após defini-los,
      você pode os controlar e se necessário alterar de forma que isso influencie positivamente a experiencia do jogador.
    
      </p>
          
          
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                   Primeiramente começe identificando variáveis as quais possam ser mudadas, é obvio que você pode fazer grandes alterações
                   na jogabilidade, mas dependendo das mudanças estas podem vir a influenciar demais o jogo, de modo que, como em uma reação em
                   cadeia, isso faça com que você mude o projeto demais, contudo, algumas caracteristicas podem ser alteradas sem modificar grandes
                   mecanicas, por exemplo dano e vida possuem uma relação que normalmente interagem com números, que podem ser influenciada de uma forma 
                   simples ou complexa, contudo o importante desses fatores é que ele faz com que você se preocupe principalmente com estes dois apresentados,
                   tempo para o reuso de habilidades ou para que ocorra algum acontecimento, normalmente é um valor que pode ser facilmente alterado dependendo
                   do jogo. Talvez você se veja na necessidade de mudar grandes coisas, como um cenário desenvolvido, mas isso demandaria um grande empenho
                   por parte da equipe ja que seria necessário alterar o mapa inteiro. Em resumo, é necessário que você pese em uma balança quais são os fatores
                   mais provaveis de serem alterados(controlados) futurarmente, tendo esses elementos em mente, você se preparar para balancea-lo e isso com certeza
                   será de grande ajuda no decorrer do projeto. 
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
      <p className="lead my-3 ">Descrição do elemento balanceável</p>
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
