import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { useState } from 'react';



const Relatorio: React.FC = () => {
  

  const [conceito] = useState(() => {
    return localStorage.getItem('conceito');  
  });

  const mostrarConceitoG = conceito !== null ? true : false;
  
  const [titulo] = useState(() => {
    return localStorage.getItem('titulo'); 
  });

  const [aplataforma] = useState(() => {
    return localStorage.getItem('aplataforma');
  });

  const mostrarAnotaçõesPlat = aplataforma !== null ? true : false;

  const [metas] = useState(() => {
    return localStorage.getItem('metas');
  });
  
  const mostrarMetas = metas !==null ? true : false;

  const[jogosI] = useState(() => {
    return localStorage.getItem('jogosI');
  });

  const mostrarJogosI = jogosI !==null ? true : false;

  const[publicoA] = useState(() => {
    return localStorage.getItem('publicoA');
  });

  const mostrarPublicoA = publicoA !==null ? true : false;


  const[conceitoH] = useState(() => {
    return localStorage.getItem('conceitoH');
  });

  const mostrarConceitoH = conceitoH !==null ? true : false;

  const[conceitoJ] = useState(() => {
    return localStorage.getItem('conceitoJ');
  });

  const mostrarConceitoJ = conceitoJ !==null ? true : false;

  const[mecanica] = useState(() => {
    return localStorage.getItem('mecanica');
  });

  const mostrarMecanica = mecanica !==null ? true : false;

  const[niveisD] = useState(() => {
    return localStorage.getItem('niveisD');
  });

  const mostrarNiveisD = niveisD !==null ? true : false;

  const[progressão] = useState(() => {
    return localStorage.getItem('progressão');
  });

  const mostrarProgressão = progressão !==null ? true : false;

  const[tutorial] = useState(() => {
    return localStorage.getItem('tutorial');
  });

  const mostrarTutorial = tutorial !==null ? true : false;

  const[arte] = useState(() => {
    return localStorage.getItem('arte');
  });

  const mostrarArte = arte !==null ? true : false;

  const[controles] = useState(() => {
    return localStorage.getItem('controles');
  });

  const mostrarControles = controles !==null ? true : false;

  const[experienciaD] = useState(() => {
    return localStorage.getItem('experienciaD');
  });

  const mostrarExperienciaD = experienciaD !==null ? true : false;

  const[habilidadeE] = useState(() => {
    return localStorage.getItem('habilidadeE');
  });

  const mostrarHabilidadeE = habilidadeE !==null ? true : false;

  const[interfaceI] = useState(() => {
    return localStorage.getItem('interfaceI');
  });

  const mostrarInterfaceI = interfaceI !==null ? true : false;

  const[trilhaS] = useState(() => {
    return localStorage.getItem('trilhaS');
  });
  
  const mostrarTrilhaS = trilhaS !==null ? true : false;

  const[ambiente] = useState(() => {
    return localStorage.getItem('ambiente');
  });

  const mostrarAmbiente =  ambiente !==null ? true : false;

  const[desafios] = useState(() => {
    return localStorage.getItem('desafios');
  });

  const mostrarDesafios = desafios !==null ? true : false;

  const[historiaC] = useState(() => {
    return localStorage.getItem('historiaC');
  });

  const mostrarHistoriaC = historiaC !==null ? true : false;

  const[percursoP] = useState(() => {
    return localStorage.getItem('percursoP');
  });

  const mostrarPercursoP = percursoP !==null ? true : false;

  const[personagens] = useState(() => {
    return localStorage.getItem('personagens');
  });

  const mostrarPersonagens = personagens !==null ? true : false;

  const[referencias] = useState(() => {
    return localStorage.getItem('referencias');
  });

  const mostrarReferencias = referencias !==null ? true : false;

  const[datas] = useState(() => {
    return localStorage.getItem('datas');
  });

  const mostrarDatas = datas !==null ? true : false;

  const[definicaoV] = useState(() => {
    return localStorage.getItem('definicaoV');
  });

  const mostrarDefinicaoV = definicaoV !==null ? true : false;

  const[ferramentasN] = useState(() => {
    return localStorage.getItem('ferramentasN');
  });

  const mostrarFerramentasN = ferramentasN !==null ? true : false;

  const[ferramentasC] = useState(() => {
    return localStorage.getItem('ferramentasC');
  });

  const mostrarFerramentasC = ferramentasC !==null ? true : false;

  const[monetização] = useState(() => {
    return localStorage.getItem('monetização');
  });

  const mostrarMonetização = monetização !==null ? true : false;

  const[ordemP] = useState(() => {
    return localStorage.getItem('OrdemP');
  });

  const mostrarOrdemP = ordemP  !==null ? true : false;

  const[recursos] = useState(() => {
    return localStorage.getItem('recursos');
  });

  const mostrarRecursos = recursos !==null ? true : false;

  
  const styles = {
    header: {
      fontSize: 30,
      bold: true,
      
    },
    title: {
      fontSize: 20,
      bold: true,
    },
    subheader: {
      fontSize: 15,
      bold: true,
    },
    quote: {
      italics: true,
    },
    small: {
      fontSize: 8,

    },
  };


  function GerarRoteiro1(){

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  
    const reportTitle: any = [
     

    ];
  
    const details: any = [

      {
        width: 100,
        style: 'header',
        text:  'Game Design Document',
        bold: true,
        alignment: 'center'
      },
      
      {
        width: 100,
        style: 'title',
        text:  titulo,
        bold: true,
        alignment: 'center'
      },
      '\n\n\n'
      
    ]

    if (mostrarConceitoG) {
      details.push({
        text: 'Conceito Geral',
			  style: 'subheader'
      },
      '\n',
      {
        text: conceito,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarAnotaçõesPlat) {
      details.push(
      '\n\n',  
      {
        text: 'Plataforma',
			  style: 'subheader'
      },
      '\n',
      {
        text: aplataforma,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarMetas) {
      details.push(
      '\n\n',  
      {
        text: 'Metas e Definições',
			  style: 'subheader'
      },
      '\n',
      {
        text: metas,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarJogosI) {
      details.push(
      '\n\n',  
      {
        text: 'Jogos e Inspirações',
        style: 'subheader'
      },
      '\n',
      {
        text: jogosI,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarPublicoA) {
      details.push(
      '\n\n',  
      {
        text: 'Público-alvo',
        style: 'subheader'
      },
      '\n',
      {
        text: publicoA,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarConceitoH) {
      details.push(
      '\n\n',  
      {
        text: 'Conceito da História',
			  style: 'subheader'
      },
      '\n',
      {
        text: conceitoH,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarConceitoJ) {
      details.push(
      '\n\n',  
      {
        text: 'Conceito da Jogabilidade',
			  style: 'subheader'
      },
      '\n',
      {
        text: conceitoJ,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarMecanica) {
      details.push(
      '\n\n',  
      {
        text: 'Mecanica de Jogo',
			  style: 'subheader'
      },
      '\n',
      {
        text: mecanica,
        alignment: 'justify'
      }
      
     ); 
    }


    if (mostrarNiveisD) {
      details.push(
      '\n\n',  
      {
        text: 'Níveis de Dificuldade',
			  style: 'subheader'
      },
      '\n',
      {
        text: niveisD ,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarProgressão) {
      details.push(
      '\n\n',  
      {
        text: 'Progressão do Jogo',
			  style: 'subheader'
      },
      '\n',
      {
        text: progressão,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarTutorial) {
      details.push(
      '\n\n',  
      {
        text: 'Tutoriais',
			  style: 'subheader'
      },
      '\n',
      {
        text: tutorial,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarArte) {
      details.push(
      '\n\n',  
      {
        text: 'Arte',
			  style: 'subheader'
      },
      '\n',
      {
        text: arte,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarControles) {
      details.push(
      '\n\n',  
      {
        text: 'Controles do Jogo',
			  style: 'subheader'
      },
      '\n',
      {
        text: controles,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarExperienciaD) {
      details.push(
      '\n\n',  
      {
        text: 'Experiência Desejada ',
			  style: 'subheader'
      },
      '\n',
      {
        text: experienciaD,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarHabilidadeE) {
      details.push(
      '\n\n',  
      {
        text: 'Habilidades Exigidas',
			  style: 'subheader'
      },
      '\n',
      {
        text: habilidadeE,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarInterfaceI) {
      details.push(
      '\n\n',  
      {
        text: 'Interface do Jogos',
			  style: 'subheader'
      },
      '\n',
      {
        text: interfaceI,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarTrilhaS) {
      details.push(
      '\n\n',  
      {
        text: 'Trilha Sonora',
			  style: 'subheader'
      },
      '\n',
      {
        text: trilhaS,
        alignment: 'justify'
      }
      
     ); 
    }
    
    if (mostrarAmbiente) {
      details.push(
      '\n\n',  
      {
        text: 'Cenário do Jogo',
        style: 'subheader'
      },
      '\n',
      {
        text: ambiente,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarDesafios) {
      details.push(
      '\n\n',  
      {
        text: 'Desafios Presentes na Narrativa',
        style: 'subheader'
      },
      '\n',
      {
        text: desafios,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarHistoriaC) {
      details.push(
      '\n\n',  
      {
        text: 'Narrativa Completa',
        style: 'subheader'
      },
      '\n',
      {
        text: historiaC,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarPercursoP) {
      details.push(
      '\n\n',  
      {
        text: 'Jornada do Herói',
        style: 'subheader'
      },
      '\n',
      {
        text: percursoP,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarPersonagens) {
      details.push(
      '\n\n',  
      {
        text: 'Personagens do Jogo',
        style: 'subheader'
      },
      '\n',
      {
        text: personagens,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarReferencias) {
      details.push(
      '\n\n',  
      {
        text: 'Referências para o Universo do Jogo',
        style: 'subheader'
      },
      '\n',
      {
        text: referencias,
        alignment: 'justify'
      }
      
     ); 
    }


    if (mostrarDatas) {
      details.push(
      '\n\n',  
      {
        text: 'Datas Estipuladas',
        style: 'subheader'
      },
      '\n',
      {
        text: datas,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarDefinicaoV) {
      details.push(
      '\n\n',  
      {
        text: 'Definição das Versões',
        style: 'subheader'
      },
      '\n',
      {
        text: definicaoV,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarFerramentasN) {
      details.push(
      '\n\n',  
      {
        text: 'Ferramentas Necessárias',
        style: 'subheader'
      },
      '\n',
      {
        text: ferramentasN,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarFerramentasC) {
      details.push(
      '\n\n',  
      {
        text: 'Ferramentas Cogitadas',
        style: 'subheader'
      },
      '\n',
      {
        text: ferramentasC,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarMonetização) {
      details.push(
      '\n\n',  
      {
        text: 'Monetizaão',
        style: 'subheader'
      },
      '\n',
      {
        text: monetização,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarOrdemP) {
      details.push(
      '\n\n',  
      {
        text: 'Ordem de Prioridade dos Fatores',
        style: 'subheader'
      },
      '\n',
      {
        text: ordemP,
        alignment: 'justify'
      }
      
     ); 
    }

    if (mostrarRecursos) {
      details.push(
      '\n\n',  
      {
        text: 'Recursos Necessários',
        style: 'subheader'
      },
      '\n',
      {
        text: recursos,
        alignment: 'justify'
      }
      
     ); 
    }

  
    const rodape: any = [];
  
    const docDefinitions: TDocumentDefinitions = {
  
      pageSize: 'A4',
      pageMargins: [50, 100, 50, 80 ],
      
      header: [reportTitle],
      content: [details],
      footer: [rodape],
      styles: styles
    }
  
    pdfMake.createPdf(docDefinitions).download();
  
  }
  
  return (
    <>
      <h1>
        Relatorio
      </h1>
      <button onClick={GerarRoteiro1}>Fazer o Dowload do PDF</button>

    </>
  );
}

export default Relatorio;

