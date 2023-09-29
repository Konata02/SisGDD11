import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import NavBar from '../../components/basics/navbar';
import './styles.css'

import Aventura from '../../assets/images/aventura.jpeg';
import Acao from '../../assets/images/acao.jpeg';
import Corrida from '../../assets/images/corrida.jpeg'

import Esporte from '../../assets/images/Esporte.png';
import Estrategia from '../../assets/images/Estratégia.png';
import QuebraCabeca from '../../assets/images/quebra-cabeças.png'

import Ritmo from '../../assets/images/Ritmo.png';
import RPG from '../../assets/images/RPG.png';
import Simulacao from '../../assets/images/Simulação.png'



import {
  Button,
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';

function Login() {
  const [aventura, setAventura] = useState(0)
  const [acao, setAcao] = useState(0)
  const [corrida, setCorrida] = useState(0)

  const [esporte, setEsporte] = useState(0)
  const [estrategia, setEstrategia] = useState(0)
  const [quebra, setQuebra] = useState(0)

  const [ritmo, setRitmo] = useState(0)
  const [rpg, setrpg] = useState(0)
  const [simula, setSimula] = useState(0)





  function aventuraSel() {
    setAventura(Math.abs(aventura - 1))
    localStorage.setItem('aventura', aventura.toString());
  }

  function acaoSel() {
    setAcao(Math.abs(acao - 1))
    localStorage.setItem('acao', acao.toString()); 
  }

  function corridaSel() {
    setCorrida(Math.abs(corrida - 1))
    localStorage.setItem('corrida', corrida.toString()); 
  }


  function esporteSel() {
    setEsporte(Math.abs(esporte - 1))
    localStorage.setItem('esporte', esporte.toString()); 
  }

  function estrategiaSel() {
    setEstrategia(Math.abs(estrategia - 1))
    localStorage.setItem('estrategia', estrategia.toString()); 
  }

  function quebraSel() {
    setQuebra(Math.abs(quebra - 1))
    localStorage.setItem('quebra', quebra.toString()); 
  }

  function ritmoSel() {
    setRitmo(Math.abs(ritmo - 1))
    localStorage.setItem('ritmo', ritmo.toString()); 
  }

  function simulaSel() {
    setSimula(Math.abs(simula - 1))
    localStorage.setItem('simula', simula.toString()); 
  }

  function rpgSel() {
    setrpg(Math.abs(rpg - 1))
    localStorage.setItem('rpg', rpg.toString()); 
  }

  useEffect(() => {
    localStorage.setItem('aventura', aventura.toString());
    localStorage.setItem('acao', acao.toString()); 
    localStorage.setItem('corrida', corrida.toString()); 
    localStorage.setItem('esporte', esporte.toString());
    localStorage.setItem('estrategia', estrategia.toString()); 
    localStorage.setItem('quebra', quebra.toString());
    localStorage.setItem('ritmo', ritmo.toString());
    localStorage.setItem('simula', simula.toString()); 
    localStorage.setItem('rpg', rpg.toString()); 

    
  });

  return (
    <>


      <div className="header">
        <NavBar />
      </div>

      <div className="container">


        <CardGroup>
          <Card>
            <CardImg
              alt="Aventura"
              src={Aventura}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Aventura
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Gênero de Jogo de Aventura
              </CardSubtitle>
              <CardText>
                Jogos de aventura envolvem exploração, coleta de itens e gerenciamento de habilidades e inventário. Eles geralmente têm elementos de quebra-cabeças e permitem que o jogador tenha tempo para pensar nos desafios. Ao contrário dos jogos de ação, que têm um ritmo mais acelerado.
              </CardText>
              <Button style={(aventura === 0) ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }} onClick={aventuraSel}>
                {(aventura === 0) ? 'Selecionar' : 'Selecionado'}
              </Button>
            </CardBody>
          </Card>

          <Card>
            <CardImg
              alt="Ação"
              src={Acao}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Ação
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Gênero de Jogo de Ação
              </CardSubtitle>
              <CardText>
                Jogos de ação enfatizam o combate rápido e requerem coordenação visomotora para jogar. Eles são geralmente jogos mais simples porque estão fortemente relacionados ao tempo de reação do jogador e não costumam ter muitas informações adicionais durante o jogo. O foco principal está na ação.
              </CardText>
              <Button style={(acao === 0) ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }} onClick={acaoSel}>
                {(acao === 0) ? 'Selecionar' : 'Selecionado'}
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Corrida"
              src={Corrida}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Corrida
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Gênero de Jogo de Corrida
              </CardSubtitle>
              <CardText>
                O gênero de corrida enfatiza a velocidade e a agilidade do jogador em um determinado desafio, frequentemente relacionado a veículos e aprimoramentos. O objetivo é vencer a competição, alcançando a maior velocidade possível sem ser interrompido. Independentes dos desafios da pista.
              </CardText>
              <Button style={(corrida === 0) ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }} onClick={corridaSel}>
                {(corrida === 0) ? 'Selecionar' : 'Selecionado'}
              </Button>
            </CardBody>
          </Card>
        </CardGroup>

        <br></br>

        <CardGroup>
          <Card>
            <CardImg
              alt="Esporte"
              src={Esporte}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Esporte
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Gênero de Jogo de Esporte
              </CardSubtitle>
              <CardText>
              Jogos referentes a esportes são normalmente simulações participativas, reproduzindo normalmente com precisão regras e possibilidades da realidade. Normalmente retratam competições atléticas, onde o usuário participa como jogador e até mesmo como técnico definindo as estratégias. 
              </CardText>
              <Button style={(esporte === 0) ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }} onClick={esporteSel}>
                {(esporte === 0) ? 'Selecionar' : 'Selecionado'}
              </Button>
            </CardBody>
          </Card>

          <Card>
            <CardImg
              alt="Estratégia"
              src={Estrategia}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Estratégia
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Gênero de Jogo de Estratégia
              </CardSubtitle>
              <CardText>
              Jogos de estratégia exaltam o pensamento e o planejamento, naturalmente os jogadores devem administrar seus recursos para atingir uma meta especifica. É um jogo onde o foco da jogabilidade normalmente está atrelado na organização de táticas visando um possível cenário no futuro
              </CardText>
              <Button style={(estrategia === 0) ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }} onClick={estrategiaSel}>
                {(estrategia === 0) ? 'Selecionar' : 'Selecionado'}
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Quebra-Cabeças"
              src={QuebraCabeca}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Quebra-Cabeças
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Gênero de Quebra-Cabeças
              </CardSubtitle>
              <CardText>
              Jogos de quebra cabeça apresentam uma jogabilidade em torno da lógica para completar padrões e resolver enigmas, jogos que se tratam apenas de puzzles realmente tem um maior foco na solução do puzzle em questão e o “personagem” muitas vezes se torna quase irrelevantes.
              </CardText>
              <Button style={(quebra === 0) ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }} onClick={quebraSel}>
                {(quebra === 0) ? 'Selecionar' : 'Selecionado'}
              </Button>
            </CardBody>
          </Card>
        </CardGroup>

        <br></br>

<CardGroup>
  <Card>
    <CardImg
      alt="Ritmo"
      src={Ritmo}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Ritmo
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Gênero de Jogo de Ritmo
      </CardSubtitle>
      <CardText>
      O gênero de ritmo está atrelado a jogos que avançam conforme você interage com sons e consequentemente músicas, de modo que a audição e reflexo se completam implementando a mecânica do jogo que estará relacionada principalmente com esses dois fatores.

      </CardText>
      <Button style={(ritmo === 0) ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }} onClick={ritmoSel}>
        {(ritmo === 0) ? 'Selecionar' : 'Selecionado'}
      </Button>
    </CardBody>
  </Card>

  <Card>
    <CardImg
      alt="RPG"
      src={RPG}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        R P G
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Gênero de Jogo de RPG
      </CardSubtitle>
      <CardText>
      Esse tipo de jogo normalmente está atrelado ao jogador assumir o papel de algum personagem específico, com uma gama de habilidades e características específicas, possuindo um estilo de jogabilidade onde há normalmente um grande crescimento voltado para o personagem.
      </CardText>
      <Button style={(rpg === 0) ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }} onClick={rpgSel}>
        {(rpg === 0) ? 'Selecionar' : 'Selecionado'}
      </Button>
    </CardBody>
  </Card>

  <Card>
    <CardImg
      alt="Simulação"
      src={Simulacao}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Simulação
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Gênero de Simulação
      </CardSubtitle>
      <CardText>
      O gênero de simulação é caracterizado por sua representação de conceitos da realidade, podendo se tratar tanto de jogos cujo sua simulação beira a realidade de algo, normalmente com intuito de instruir realmente, quanto jogos que se baseiam apenas em conceitos gerais, como a expansão de uma civilização.
      </CardText>
      <Button style={(simula === 0) ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }} onClick={simulaSel}>
        {(simula === 0) ? 'Selecionar' : 'Selecionado'}
      </Button>
    </CardBody>
  </Card>
</CardGroup>

        <Link to="/dashboard">
          <Button className='GerarRoteiro' color="info">
            Gerar Roteiro
          </Button>
        </Link>


        <br></br>
        <br></br>

      </div>
    </>
  )
}

export default Login
