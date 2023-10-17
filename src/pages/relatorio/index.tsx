import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import titulo from '../gdd/conceito_jogo/titulo';
import { useState } from 'react';



const Relatorio: React.FC = () => {
  
  const [titulo, setTitulo] = useState(() => {
    const storedTitulo = localStorage.getItem('titulo');
    return storedTitulo !== null ? storedTitulo : 'Digite o titulo do jogo...';
  });

  function GerarRoteiro1(){

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  
    const reportTitle: any = [
      {
        width: 100,
        style: 'header',
        text:  titulo,
        bold: true,
        alignment: 'center'
      },

    ];
  
    const details: any = [

      {
        width: 100,
        style: 'header',
        text:  titulo,
        bold: true,
        alignment: 'center'
      },
      {
        text:  titulo
      }

    ]
  
    const rodape: any = [];
  
    const docDefinitions: TDocumentDefinitions = {
  
      pageSize: 'A4',
      pageMargins: [30, 50, 15, 40 ],
      
      header: [reportTitle],
      content: [details],
      footer: [rodape]
  
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


