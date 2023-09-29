/*import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../src/pages/home';
import Login from '../src/pages/genero';
import GDD from '../src/pages/gdd';
import Dashboard from '../src/pages/dashboard';



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Login} path="/genero" />
        <Route component={GDD} path="/gdd" />
        <Route component={Dashboard} path="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;

*/

import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from '../src/pages/home';
import Login from '../src/pages/genero';
import GDD from '../src/pages/gdd';
import Dashboard from '../src/pages/dashboard';
import Jogabilidade from '../src/pages/gdd/conceito_jogo/jogabilidade';
import Historia from '../src/pages/gdd/conceito_jogo/história';
import Titulo from '../src/pages/gdd/conceito_jogo/titulo';
import Arte from '../src/pages/gdd/ihc/arte';
import Controles from '../src/pages/gdd/ihc/controles';
import Experiencia_desejada from '../src/pages/gdd/ihc/experiencia_desejada';
import Habilidades_exigidas from '../src/pages/gdd/ihc/habilidades_exigidas';
import Interface from '../src/pages/gdd/ihc/interface';
import Trilha_sonora from '../src/pages/gdd/ihc/trilha_sonora';
import Mecanica from '../src/pages/gdd/jogabilidade_geral/mecanica';
import Niveis_dificuldade from '../src/pages/gdd/jogabilidade_geral/niveis_dificuldade';
import Progressao from '../src/pages/gdd/jogabilidade_geral/progressao';
import Tutorial from '../src/pages/gdd/jogabilidade_geral/tutorial';
import Jogos_inspiracoes from './pages/gdd/metas_definicoes/jogos_inspiracoes';
import Publico_alvo from '../src/pages/gdd/metas_definicoes/public-alvo';
import Datas from '../src/pages/gdd/producao/datas'
import Definicao_versao from '../src/pages/gdd/producao/definicao_versao'
import Ferramentas from '../src/pages/gdd/producao/ferramentas'
import Monetizacao from '../src/pages/gdd/producao/monetizacao'
import Ordem_prioridade from '../src/pages/gdd/producao/ordem_prioridade'
import Recursos from '../src/pages/gdd/producao/recursos'
import Ambiente from '../src/pages/gdd/universe/ambiente'
import Desafios from '../src/pages/gdd/universe/desafios'
import Historia_completa from '../src/pages/gdd/universe/historia_completa'
import Percurso_personagem from '../src/pages/gdd/universe/percurso_personagem'
import Personagens from '../src/pages/gdd/universe/personagens'
import Referencias from '../src/pages/gdd/universe/referencias'
import Fluxo_jogo from './pages/gdd/jogabilidade_geral/mecanica/fluxo_jogo'
import Regras_limitacoes from './pages/gdd/jogabilidade_geral/mecanica/regras_limitacoes'
import Definicao_inimigos from './pages/gdd/jogabilidade_geral/mecanica/fluxo_jogo/definicao_inimigos'
import Balanceamento from './pages/gdd/jogabilidade_geral/mecanica/regras_limitacoes/balanceamento'

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/genero" element={<Login />} />
        <Route path="/gdd" element={<GDD />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jogabilidade" element={<Jogabilidade />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/titulo" element={<Titulo />} />
        <Route path="/arte" element={<Arte />} />
        <Route path="/controles" element={<Controles />} />
        <Route path="/experiencia_desejada" element={<Experiencia_desejada />} />
        <Route path="/habilidades_exigidas" element={<Habilidades_exigidas />} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/trilha_sonora" element={<Trilha_sonora />} />
        <Route path="/mecanica" element={<Mecanica />} />
        <Route path="/niveis_dificuldade" element={<Niveis_dificuldade />} />
        <Route path="/progressao" element={<Progressao />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/jogos_inspiracoes" element={<Jogos_inspiracoes />} />
        <Route path="/publico_alvo" element={<Publico_alvo />} />
        <Route path="/datas" element={<Datas />} />
        <Route path="/definicao_versao" element={<Definicao_versao />} />
        <Route path="/ferramentas" element={<Ferramentas />} />
        <Route path="/monetizacao" element={<Monetizacao />} />
        <Route path="/ordem_prioridade" element={<Ordem_prioridade />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/ambiente" element={<Ambiente />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/historia_completa" element={<Historia_completa />} />
        <Route path="/percurso_personagem" element={<Percurso_personagem />} />
        <Route path="/personagens" element={<Personagens />} />
        <Route path="/referencias" element={<Referencias />} />
        <Route path="/fluxo_jogo" element={<Fluxo_jogo />} />
        <Route path="/regras_limitacoes" element={<Regras_limitacoes />} />
        <Route path="/definicao_inimigos" element={<Definicao_inimigos />} />
        <Route path="/balanceamento" element={<Balanceamento />} />
        
      
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
