import './styles.css'
import Sidebar from '../../components/basics/sidebar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Button
} from 'reactstrap';
import { FiLogIn } from 'react-icons/fi';


const GDD: React.FC = () => {

  const [showExample, setShowExample] = useState(false);
  const [conceito, setConceito] = useState("Digite o conceito do jogo...")

  const handleClick = () => {
    setShowExample(!showExample);
  };

  function gravaConceito(event : any) {
    setConceito(event.target.value)
    localStorage.setItem('conceito',conceito)
    console.log(localStorage.getItem('conceito'))
  }
  


  return (
    <div className="container">
      <header>
        <Sidebar />
      </header>
      <body>

        <div className="column">

          <div className="about-container p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
            <h1 className="display-4 fst-italic text-center">Conceito do Jogo </h1>
            <p className="text-center"> O SisGDD se trata de uma ferramenta de instrução e auxilio para que você desenvolva o roteiro
              de seu jogo. Dessa forma, as informações que você preencher irão gerar seu roteiro ao final da aplicação.</p>


            <div className="row">
              <div className="col-lg-6 px-2">
                <p className="lead my-3">O conceito de um jogo é o ponto de partida para sua criação, representando a ideia central que o define
                  e orienta seu desenvolvimento. Pense em quais são as principais caracteristicas que chamarão atenção dentro de seu jogo, Seja algo
                  relacionado a sua mecânica ou história, partindo desse ponto, seu jogo irá desenvolver sua identidade, ou seja, seus principais
                  fatores. Você pode optar por informar a caracteristica mais relevante de seu jogo, seus desafios e objetivos.</p>


                {showExample && (
                  <>
                    <p className="example-container text-white lead my-1">
                      O jogo Quick to get out, se trata de um jogo de plataforma focado no objetivo de chegar ao final da fase
                      dentro de um cronômetro estipulado. Trata-se de um objetivo simples de correr contra o tempo enquanto soluciona
                      puzzles da forma mais rápida possível com intuito de chegar em seus objetivos. Enquanto você corre para alcançar
                      seu objetivo, eventos especiais podem dificultar seu percurso, diminuir seu tempo para conclusão ou até mesmo
                      estender seu tempo para conclusão dependendo de decisões que o jogador pode tomar.
                    </p>
                    <Button className="btn-bd-primary" onClick={handleClick}>
                      {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                    </Button></>
                )}
                {!showExample && (
                  <Button className="btn-bd-primary" onClick={handleClick}>
                    {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                  </Button>
                )}

                

               
                  </div>

                <div className="col-lg-6 px-0 ">
                  <h1 className="display-4 fst-italic"></h1>
                  <p className="lead my-3 ">Conceito do Jogo</p>
                  <div className="container-text">
                    <textarea className="full-width px-0" value={conceito} onChange={gravaConceito}></textarea>
                  

                </div>
              
              <div className="container-buttons">

                <Link to="/titulo">
                  <Button className="custom-button" onClick={handleClick} >
                    Título do Jogo
                  </Button>
                </Link>
                <Link to="/historia">
                  <Button className="custom-button" onClick={handleClick}>
                    Conceito de História
                  </Button>
                </Link>
                <Link to="/jogabilidade">
                  <Button className="custom-button" onClick={handleClick}>
                    Conceito de Jogabilidade
                  </Button>
                </Link>

              </div>
              {(Number(localStorage.getItem ('aventura'))) === 1 && (
                  <p className="example-container text-white lead my-1">
                    <strong  style={{ fontWeight: 'bold', color: 'black' }} >Elemento Prioritário: Conceito da História</strong>
                    <p>Jogos de aventura normalmente possuem um foco prioritário no enredo do jogo, pois este pode vir a definir inumeros fatores importantes 
                    para se criar um contexto interessante para a aventura do jogo.</p>
                  </p>
                )}
              </div>
              
              </div>

            </div>

            <div className="about-container p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
              <h1 className="display-4 fst-italic text-center">Plataforma do Jogo</h1>
              <div className="row">
                <div className="col-lg-6 px-2">
                  <p className="lead my-3">Decidir-se a respeito de sua plataforma pode ser de extrema importância para o futuro do desenvolvimento,
                    a plataforma pode fazer-te pensar a respeito dos controles que poderão ser utilizados, facilidade na publicação, monetizações possíveis e amplitude do público.
                    Dependendo do tipo de jogo pode ser difícil implementar em alguma plataforma, também pode se tornar um desafio caso você queira implementar para mais de uma plataforma
                    simultaneamente ou posteriormente. Cada plataforma tem seu conjunto de ferramentas que podem ser utilizados no desenvolvimento, além disso algumas plataformas podem expor
                    restrições que podem não ser muio adequadas para o tipo de jogo que se quer desenvolver.</p>


                  {showExample && (
                    <>
                      <p className="example-container text-white lead my-1">
                        De acordo com uma pesquisa de marcado atual, jogos mobile, estão em alta no mercado, se tratando de um jogo de um desenvolvimento de um jogo idle
                        o touchscream é uma boa opção de controle, também relacionado com isso, nosso público alvo será o de jovens de 12-16 anos, pois é possível perceber diante
                        de pesquisas jovens como esse possuem tendências a gastarem seu tempo em pequenos intervalos.
                      </p>
                      <Button className="btn-bd-primary" onClick={handleClick}>
                        {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                      </Button></>
                  )}
                  {!showExample && (
                    <Button className="btn-bd-primary" onClick={handleClick}>
                      {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                    </Button>
                  )}
                </div>

                <div className="col-lg-6 px-0 column ">



                  <div className="spacing-container"></div>

                  <label htmlFor="country" className="form-label">Plataforma-alvo</label>
                  <div className="form-check">

                    <input type="checkbox" className="form-check-input" id="same-address" />
                    <label className="form-check-label" htmlFor="same-address">Computador </label>
                  </div>

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="same-address" />
                    <label className="form-check-label" htmlFor="same-address">Celular</label>
                  </div>

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="save-info" />
                    <label className="form-check-label" htmlFor="save-info">Console</label>
                  </div>
                  <div className="spacing-container"></div>
                  <div className="spacing-line"></div>

                  <div className="spacing-container"></div>
                  <div className="col-md-12">
                    <label htmlFor="country" className="form-label">Graficos</label>
                    <select className="form-select" id="country" required>
                      <option value="">Que tipo de grafico você deseja apresentar em seu jogo?</option>
                      <option>2D</option>
                      <option>2.5D</option>
                      <option>3D</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="spacing-container"></div>

                  <div className="col-md-12">
                    <label htmlFor="country" className="form-label">Câmera</label>
                    <select className="form-select" id="country" required>
                      <option value="">A camera impacta diretamente na imersão de seu jogo.</option>
                      <option>Primeira Pessoa</option>
                      <option>Terceira Pessoa</option>
                      <option>Top Down</option>
                      <option>Side Scrowlling</option>
                      <option>Tela Fixa</option>
                      <option>Isométrica</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div className="spacing-container"></div>
                  <div className="spacing-line"></div>

                  <div className="col-md-12">
                    <h1 className="display-4 fst-italic"></h1>
                    <p className="lead my-3 ">Anotações sobre a plataforma</p>
                    <div className="container-text">
                      <textarea className="full-width px-0"></textarea>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div className="about-container p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
              <h1 className="display-4 fst-italic text-center">Metas e Definições</h1>
              <div className="row">
                <div className="col-lg-6 px-2">
                  <p className="lead my-3">
                    No GDD, as metas e definições trabalham em conjunto para fornecer uma visão abrangente do jogo e guiar o desenvolvimento. As metas estabelecem os objetivos gerais e a direção,
                    enquanto as definições fornecem os detalhes específicos necessários para a criação do jogo. Esses elementos ajudam a garantir que todos os envolvidos no projeto tenham uma
                    compreensão clara do que está sendo desenvolvido e do que se espera alcançar. Definindo alguns fatores principais como público alvo e inspirações podem tornar possível a percepção
                    de elementos que são prioritários ao invés de outros, tornando-a assim uma decisão que impacta fortemente no desenvolver do trabalho.
                  </p>


                  {showExample && (
                    <>
                      <p className="example-container text-white lead my-1">
                        Ao longo do projeto espera-se alcançar um jogo focado em demonstrar sua ambientação, é esperado cenários muito coloridos e bem imerssivos, para isso vamos nos basear no cenário
                        apresentado na obra Made in Abssys, ao longo do jogo será apresentado uma vibe tranquila, onde o principal sentimento que queremos passar é a de contemplação, para isso é indispensável
                        uma boa trilha sonora. Nosso Público alvo será especifico, a jogadores que consomem jogos indies com uma boa história e ambientação.
                      </p>
                      <Button className="btn-bd-primary" onClick={handleClick}>
                        {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                      </Button></>
                  )}
                  {!showExample && (
                    <Button className="btn-bd-primary" onClick={handleClick}>
                      {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                    </Button>
                  )}
                </div>

                <div className="col-lg-6 px-0 column ">

                  <div className="px-0 ">
                    <h1 className="display-4 fst-italic"></h1>
                    <p className="lead my-3 ">Metas e Definições</p>
                    <div className="container-text">
                      <textarea className="full-width px-0"></textarea>
                    </div>

                  </div>
                  <div className="container-buttons">

                    <Link to="/publico_alvo">
                      <Button className="custom-button" onClick={handleClick} >
                        Público-alvo
                      </Button>
                    </Link>
                    <Link to="/jogos_inspiracoes">
                      <Button className="custom-button" onClick={handleClick}>
                        Jogos e Inspirações
                      </Button>
                    </Link>


                  </div>
                  {(Number(localStorage.getItem ('aventura'))) === 1 && (
                  <p className="example-container text-white lead my-1">
                    <strong  style={{ fontWeight: 'bold', color: 'black' }} >Elemento Prioritário: Jogos e Inspirações</strong>
                    <p>Os conceitos que tornam um jogo caracterizado como aventura podem se mostrar abstratos e difíceis de serem representados, talvez seja uma boa ideia pensar em inspirações para que sua aventura seja ainda mais relevante.
                    </p>
                  </p>
                )}
                </div>
                
              </div>

              
            
            </div>

            <p className="text-center">  Com relação a ordem de preenchimento do documento. Não necessáriamente existe uma ordem correta para você se basear em outra ou priorizar de antemão,
              só tenha em mente de que a maior parte dos fatores devem levar em consideração outros fatores, pois o desenvolvimento de um jogo possui relação entre
              todas as partes umas com as outras.</p>

            <div className="about-container p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
              <h1 className="display-4 fst-italic text-center">Jogabilidade</h1>

              <div className="px-2">
                <p className="lead my-3">
                  A jogabilidade esta atrelada a definição de elementos presentes dentro do jogo com os quais o o jogador irá interagir, esta é uma
                  das caracteristicas menos abstratas que se possui dentro do desenvolvimento de um jogo, a jogabilidade pode ser definida como a relação
                  entre as mecânicas de jogo e a progressão do jogador, é necessário que a equipe entenda de maneira apropriada, quais são os desafios e elementos
                  inseridos dentro de jogo e como eles interagem entre si e com o jogador, quais são todas as alternativas que seu jogador possuí para avançar diante
                  de seus desafios?
                </p>
              </div>
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Em um jogo de baralho, a jogabilidade estaria bastante atrelada, as funções de cartas e as possibilidades que elas abrem dentro de um jogo,
                    enquanto em um jogo de luta, os combos possíveis, a quantidade de dano que os golpes causam, outras mecânicas como troca de personagem no meio
                    do combate, estamina, ou interferências do campo. Entenda que basicamente a jogabilidade está diretamente ligada com o que é possível de seu
                    jogador fazer e o que pode "interagir" com ele durante o jogo. Isso vai desde de atributos que estão influenciando o jogador de uma forma indireta
                    ou oculta, até um design especifico de mapa que serve para atrapalhar o jogador de realizar suas ações com liberdade total.
                  </p>
                  <Button className="btn-bd-primary" onClick={handleClick}>
                    {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                  </Button></>
              )}
              {!showExample && (
                <Button className="btn-bd-primary" onClick={handleClick}>
                  {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                </Button>
              )}


              <div className="container-buttons">

                <Link to="/mecanica">
                  <Button className="custom-button" onClick={handleClick} >
                    Mecânica de Jogo
                  </Button>
                </Link>
                <Link to="/tutorial">
                  <Button className="custom-button" onClick={handleClick}>
                    Tutorial
                  </Button>
                </Link>
                <Link to="/progressao">
                  <Button className="custom-button" onClick={handleClick}>
                    Progressão
                  </Button>
                </Link>
                <Link to="/niveis_dificuldade">
                  <Button className="custom-button" onClick={handleClick}>
                    Níveis de Dificuldade
                  </Button>
                </Link>


              </div>


            </div>

            <div className="about-container p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
              <h1 className="display-4 fst-italic text-center">Relação Humano-Computador</h1>

              <div className="px-2">
                <p className="lead my-3">
                  A relação humano-computador pode ser definido como a preocupação que temos sobre as formas com que nosso jogador irá interagir com nosso jogo, entretanto, diferente
                  da jogabilidade que se trata de fatores internos, normalmente nos preocuparemos também com fatores externos, ou seja, trata-se de um fator complementar ao que haviámos desenvolvido,
                  tais como expectativas, habilidades e necessidades dos jogadores, interface do usuário, controles e até feedbacks. De uma forma menos técnica, aqui estaremos preocupados com como o
                  jogador se comporta ao interagir com os elementos do jogo. É importante perceber as relações não apenas internas à máquina, mas também fatores que afetam o jogador com relação a seu
                  conforto e percepção.
                </p>
              </div>
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Se tratando de um jogo de corrida, e essencial que os controles sejam intuitivos, que a trilha sonora não seja enjoativa e que a interface do jogador não seja poluída.
                    Isso por que o jogo em questão possuirá corridas que serão de certa forma monótonas. Olhando por outro lado, um jogo 2D de plataforma voltado para apresentar uma arte excepcional
                    precisa possuir uma boa ambientação, ou seja cores marcantes e uma trilha sonora envolvente. De certa forma, a interação humano-computador está voltada para entender como o usuário
                    irá se envolver com o jogo, seja de forma fisica, sendo relacionada aos reflexos necessários, ou de forma sentimental, envolvendo níveis de extase ou sentimentos profundos como reflexões.
                  </p>
                  <Button className="btn-bd-primary" onClick={handleClick}>
                    {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                  </Button></>
              )}
              {!showExample && (
                <Button className="btn-bd-primary" onClick={handleClick}>
                  {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                </Button>
              )}


              <div className="container-buttons">

                <Link to="/controles">
                  <Button className="custom-button" onClick={handleClick} >
                    Controles
                  </Button>
                </Link>
                <Link to="/interface">
                  <Button className="custom-button" onClick={handleClick}>
                    Interface
                  </Button>
                </Link>
                <Link to="/arte">
                  <Button className="custom-button" onClick={handleClick}>
                    Arte
                  </Button>
                </Link>
                <Link to="/habilidades_exigidas">
                  <Button className="custom-button" onClick={handleClick}>
                    Habilidades Exigidas
                  </Button>
                </Link>
                <Link to="/trilha_sonora">
                  <Button className="custom-button" onClick={handleClick}>
                    Trilha Sonora
                  </Button>
                </Link>
                <Link to="/experiencia_desejada">
                  <Button className="custom-button" onClick={handleClick}>
                    Experiência Desejada
                  </Button>
                </Link>


              </div>

              {(Number(localStorage.getItem ('aventura'))) === 1 && (
                  <p className="example-container text-white lead my-1">
                    <strong  style={{ fontWeight: 'bold', color: 'black' }} >Elementos Prioritários: Trilha Sonora e Experiencia Desejada</strong>
        
                    <p>A trilha sonora desempenha um papel crucial nos jogos de aventura, pois cria uma atmosfera única que aprofunda a imersão no cenário. Além disso, 
                      ter clareza sobre a experiência que deseja proporcionar ao jogador é um alicerce fundamental para o desenvolvimento de outros aspectos do jogo.
                    </p>

                  </p>
                )}

            

            </div>

            <p className="text-center">  Lembrem-se, fiquem tranquilos os estilos de jogos são diversos, simplicidade não necessáriamente quer dizer uma má qualidade,
              o que importa é a adequação com o jogo em questão, alguns jogos abrem mais portas para um desenvolvimento narrativo por exemplo, outros não. Estejam ciente de
              quais fatores são realmente importantes de acordo com o estilo de jogo que você está desenvolvendo.</p>

            <div className="about-container p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
              <h1 className="display-4 fst-italic text-center">Universo</h1>

              <div className="px-2">
                <p className="lead my-3">
                  O universo é onde nos preocuparemos com o contexto do universo em que estamos inserindo o jogador, isso serve particularmente para trazer uma conformidade e conforto
                  para o jogador, em diversos jogos é necessário se preocupar com as justificativas dos acontecimentos ou dos elementos ali presentes, isso se bem trabalhado pode ocasionar
                  em uma motivação adicional para o jogador além da empolgação agregada apenas pela jogabilidade. A descrição do universo em questão é um grande fator que proporciona uma
                  imersão satisfatória quando estamos interagindo com algo. Portanto se preocupe em definir seu universo, as bases e pretenções para o projeto. Por que determinado elemento
                  está naquele lugar, naquele momento, O que aquele cenário representa, qual o peso que isso trás para o jogador? Como o jogador é influenciado ao longo
                  do decorrer do jogo?
                </p>
              </div>
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Em jogos de mundo aberto, ou que pelo menos possuem como uma de suas premissas, uma narrativa envolvente normalmente devem possuir um universo muito bem definido.
                    Isso por que, normalmente esse tipo de jogo utilizam de um conceito escolhido para representar o universo em que o jogador se encontra, da mesma forma que um filme
                    ou um livro, histórias bem contadas tendem a cativar aqueles que assistem. Isso tende a ser importante na maior parte dos jogos, exceto aqueles que buscam implementar
                    apenas a diversão e desafios. Portanto, para se descrever um mundo especifico é natural que você busque por referência e se preocupe com alguns fatores básicos da narrativa,
                    como a definição do protagonista, sua jornada e seus desafios.
                  </p>
                  <Button className="btn-bd-primary" onClick={handleClick}>
                    {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                  </Button></>
              )}
              {!showExample && (
                <Button className="btn-bd-primary" onClick={handleClick}>
                  {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                </Button>
              )}


              <div className="container-buttons">

                <Link to="/referencias">
                  <Button className="custom-button" onClick={handleClick} >
                    Referências
                  </Button>
                </Link>
                <Link to="/percurso_personagem">
                  <Button className="custom-button" onClick={handleClick}>
                    Percurso do Personagem
                  </Button>
                </Link>
                <Link to="/historia_completa">
                  <Button className="custom-button" onClick={handleClick}>
                    História
                  </Button>
                </Link>
                <Link to="/personagens">
                  <Button className="custom-button" onClick={handleClick}>
                    Personagens
                  </Button>
                </Link>
                <Link to="/ambiente">
                  <Button className="custom-button" onClick={handleClick}>
                    Ambiente
                  </Button>
                </Link>
                <Link to="/desafios">
                  <Button className="custom-button" onClick={handleClick}>
                    Desafios
                  </Button>
                </Link>


              </div>

                {(Number(localStorage.getItem ('aventura'))) === 1 && (
                  <p className="example-container text-white lead my-1">
                    <strong  style={{ fontWeight: 'bold', color: 'black' }} >Elementos Prioritários: Referências, Percurso do Personagem, Personagens, Ambiente, História, Desafios.</strong>
                    <p> Em questão a seção de Universo, todos os elementos são prioritários. Em um jogo de aventura vertentes que auxiliam na imersão do jogador no universo, e fatores que tornam o 
                      contexto do cenário mais "vivo" são extremamente relevantes. A construção do universo do jogo vem acompanhado com todos esses elementos em especifico, ao ter eles bem definidos e pensados
                      com antecedência faz você pensar em uma série de fatores que possam vir a se tornar problemáticas no futuro.
                     </p>
                  </p>
                )}

               


            </div>

            <div className="about-container p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
              <h1 className="display-4 fst-italic text-center">Produção</h1>

              <div className="px-2">
                <p className="lead my-3">
                  A produção dentro de um projeto de desenvolvimento é indispensável, é sempre recomendável que uma empresa possua um padrão de projeto estipulado para seguir.
                  Dessa forma, é necessário nos preocupar com alguns fatores básicos na criação de um jogo digital. Organizar e definir alguns fatores dentro da produção pode se
                  mostrar essêncial para manter uma organização básica, projetar para escolher o que será realizado pode trazer-te uma visão ampliada do futuro do projeto, fazendo
                  com que suas decisões mudem com o decorrer do projeto, ou que pelo menos, torne os desenvolvedores mais conscientes das condições necessárias para a conclusão do
                  jogo em questão.
                </p>
              </div>
              {showExample && (
                <>
                  <p className="example-container text-white lead my-1">
                    Considerando os recursos que estão disponíveis para a compra na internet podemos realizar um orçamento do quanto é possível gastar para a produção.
                    Após ter uma noção dos elementos que temos, podemos definir o que vamos precisar ao longo do projeto, isso pode ocasionar na desistência de alguns fatores,
                    de acordo com nossas prioridades podemos julgar o que é necessário terminar antes de implementar a sequência para que assim possamos otimizar a jornada do trabalho.
                    De forma resumida, pensar na produção faz com que os desenvolvedores possam refletir sobre o que é necessário e possível de fazer, para que dessa forma o projeto
                    sofra mudanças menos drásticas ao longo do desenvolvimento.
                  </p>
                  <Button className="btn-bd-primary" onClick={handleClick}>
                    {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                  </Button></>
              )}
              {!showExample && (
                <Button className="btn-bd-primary" onClick={handleClick}>
                  {showExample ? 'Ocultar Exemplo' : 'Mostrar Exemplo'}
                </Button>
              )}


              <div className="container-buttons">

                <Link to="/ordem_prioridade">
                  <Button className="custom-button" onClick={handleClick} >
                    Ordem de Prioridade
                  </Button>
                </Link>
                <Link to="/monetizacao">
                  <Button className="custom-button" onClick={handleClick}>
                    Monetização
                  </Button>
                </Link>
                <Link to="/definicao_versao">
                  <Button className="custom-button" onClick={handleClick}>
                    Definição das Versões
                  </Button>
                </Link>
                <Link to="/datas">
                  <Button className="custom-button" onClick={handleClick}>
                    Data de Lançamento
                  </Button>
                </Link>
                <Link to="/recursos">
                  <Button className="custom-button" onClick={handleClick}>
                    Verificação de Recursos
                  </Button>
                </Link>
                <Link to="/ferramentas">
                  <Button className="custom-button" onClick={handleClick}>
                    Ferramentas
                  </Button>
                </Link>

              </div>

        
                
          
            </div>
          
           
          
          </div>

          <div className="container-buttons">
              <div className="acesso about-container2 p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                <Link to="/genero">
                  <span>
                  <FiLogIn size={35} color="#FFFFFF" />
                  </span>
                
                  <strong>Gerar o Roteiro!</strong>
                </Link>

              </div>
          </div>      
      
      </body>
          
    </div>
        
  );
}
export default GDD;
