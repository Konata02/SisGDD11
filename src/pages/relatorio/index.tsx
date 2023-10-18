import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { useState } from 'react';



const Relatorio: React.FC = () => {
  

  const [conceito] = useState(() => {
    const storedConceito = localStorage.getItem('conceito');
    return storedConceito !== null ? storedConceito : 'Digite o conceito do jogo...';
  });

  const mostrarConceitoG = conceito !== null ? true : false;
  
  const [titulo] = useState(() => {
    const storedTitulo = localStorage.getItem('titulo');
    return storedTitulo !== null ? storedTitulo : 'Digite o titulo do jogo...';
  });

  const [aplataforma] = useState(() => {
    const storedConceito = localStorage.getItem('aplataforma');
    return storedConceito !== null ? storedConceito : 'Alguma anotação adicional sobre a plataforma??';
  });

  const mostrarAnotaçõesPlat = aplataforma !== null ? true : false;

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
      {
        width: 100,
        style: 'header',
        text:  'Game Design Document',
        bold: true,
        alignment: 'center'
      },

    ];
  
    const details: any = [

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

