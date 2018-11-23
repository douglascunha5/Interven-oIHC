
const perguntas = [
  {
    pergunta: 'Uma das bandas de Rock mais aclamadas de todos os tempos. Influenciaram milhares pelo seu estilo de cabelo',
    respostas: ['Pink Floyd', 'The Beatles', 'The Rolling Stones', 'Scorpions'],
    correta: 1,
    img: "images/beatles.jpg"
  },
    {
    pergunta: 'Grupo musical formado por irmãos com grandes sucessos, dos quais John Travolta dançava nos "Embalos de Sábado à Noite"',
    respostas: ['Bee Gees', 'Paul McCartney and Wings', 'The Jackson 5', 'Eagles'],
    correta: 0,
    img: "images/beegees.jpg"
  },
  {
    pergunta: 'Começou sua carreira com seus 4 irmãos. Revolucionou todo um gênero musical com suas músicas e danças.',
    respostas: ['David Bowie', 'Elton John', 'Bon Jovi', 'Michael Jackson'],
    correta: 3,
    img: "images/MJ.jpg"
  },
  {
    pergunta: 'Emplacou sucessos como "Vision of Love" logo no seu álbum de estreia, rendendo 4 singles pela Billboard',
    respostas: ['Céline Dion', 'Madonna', 'Mariah Carey', 'Alanis Morissette'],
    correta: 2,
    img: "images/mariah.jpg"
  },
  {
    pergunta: 'Com apenas 16 anos lança seu primeiro albúm.Possui mais de 7 estatuetas do Grammy e apadrinhou um cantor canadense que faz grande sucesso nas paradas mundiais',
    respostas: ['50 Cent', 'Usher', 'Jay-Z', 'Akon'],
    correta: 1,
    img: "images/usher.jpg"
  },
    {
    pergunta: 'Cantora, compositora e atriz possui uma carreira bem-sucedidas da atualidade, com participações em várias séries e filmes como "Oito Mulheres e um Segredo". Já foi casada com Chris Brown',
    respostas: ['Selena Gomez', 'Taylor Swift', 'Rihanna', 'Katy Perry'],
    correta: 2,
    img: "images/rihanna.jpg"
  }
]

const perguntasNacionais = [
  {
    pergunta: 'Iniciou sua carreira musical na banda "Os Mutantes", entretando ficou conhecida nacionalmente na banda "Tutti-Frutty" após o lançamento do single "Agora Só Falta Você". É considerada a rainha do rock nacional.',
    respostas: ['Rita Lee', 'Pitty', 'Clara Nunes', 'Fafá de Belém'],
    correta: 0,
    img: "images/rita.jpg"
  },
    {
    pergunta: 'Considerada por alguns críticos a maior cantora brasileira de todos os tempos, gravou com Antônio Carlos Jobim o álbum Elis & Tom (1974). Faleceu aos 36 anos de idade devido à uma overdose de cocaína.',
    respostas: ['Clara Nunes', 'Alcione', 'Elis Regina', 'Maria Bethânia'],
    correta: 2,
    img: "images/elis.jpg"
  },
  {
    pergunta: 'Quantro estudantes de Arquitetura decidiram formar uma banda, seu nome é uma sátira aos estudantes de engenharia, que andavam com bermudas de surfista. Essa banda ficou conhecida como:',
    respostas: ['14 Bis', 'Oficina G3', 'Nenhum de Nós', 'Engenheiros do Hawaii'],
    correta: 3,
    img: "images/engenheiros.jpg"
  },
  {
    pergunta: 'O nome da banda é inspirado pelos Ramones, em 1999 lançaram o álbum "Só no Forevis" que vendeu mais de 100mil cópias em apenas 3 meses',
    respostas: ['Charlie Brown Júnior', 'Raimundos', 'Matanza', 'Tihuana'],
    correta: 1,
    img: "images/raimundos.jpg"
  },
  {
    pergunta: 'Dupla sertaneja que ficou muito conhecida em 2006 após o lançamento do cd "Ao vivo em Uberlândia", que emplacou 3 músicas no topo dos sucessos nacionais ao mesmo tempo: Amigo apaixonado, Vida boa e Fada',
    respostas: ['Victor e Léo', 'Jorge e Matheus', 'Henrique e Juliano', 'João neto e Frederico'],
    correta: 0,
    img: "images/victoreleo.jpg"
  },
    {
    pergunta: 'Dupla sertaneja que ficou conhecida em 2012 após o sucesso de músicas como "126 cabides" e "Quando o mel é bom", conhecidas como as coleguinhas do Brasil',
    respostas: ['Gabriela e Raphaela', 'Lola & Vitória', 'Simone e Simaria', 'Mayara e Maraísa'],
    correta: 2,
    img: "images/simoniesimaria.jpg"
  }
]
let perguntaDOM = $('#question-text')
let perguntaAtual = 0
let acertos = 0
let erros = 0
let respostaSelecionada
let resposta0DOM = $('#resposta0 > p')
let resposta1DOM = $('#resposta1 > p ')
let resposta2DOM = $('#resposta2 > p')
let resposta3DOM = $('#resposta3 > p')
let img = $('.canto-top')
var categoria = 0;

function carregarTeste(categoriaEscolhida){
    $('.escolhaQuiz').css("display", "none")
    $('.todo').css("display", "grid")
    $('.fundo').css("background-color", "white")
    $('.fundo').css("background-image", "none")
    if(categoriaEscolhida == 1){
        this.categoria = 1;
        perguntaDOM.text(perguntas[0].pergunta)
        resposta0DOM.text(perguntas[0].respostas[0])
        resposta1DOM.text(perguntas[0].respostas[1])
        resposta2DOM.text(perguntas[0].respostas[2])
        resposta3DOM.text(perguntas[0].respostas[3])
    }
    else{
        this.categoria = 2;
        perguntaDOM.text(perguntasNacionais[0].pergunta)
        resposta0DOM.text(perguntasNacionais[0].respostas[0])
        resposta1DOM.text(perguntasNacionais[0].respostas[1])
        resposta2DOM.text(perguntasNacionais[0].respostas[2])
        resposta3DOM.text(perguntasNacionais[0].respostas[3])
    }
}

function pular() {
  $("#btnconfirmar").css("display","")
  $("#btnProxima").text("Pular")
  if(this.categoria == 1){
      if(perguntaAtual < perguntas.length){
          $(`#resposta${perguntas[perguntaAtual].correta}`).addClass('normal')
          $(`#resposta${perguntas[perguntaAtual].correta}`).removeClass('acertoouu')
      }
      if (++perguntaAtual < perguntas.length){
        $(`#ano${perguntaAtual}`).addClass('selected-ano')
        perguntaDOM.text(perguntas[perguntaAtual].pergunta)
        resposta0DOM.text(perguntas[perguntaAtual].respostas[0])
        resposta1DOM.text(perguntas[perguntaAtual].respostas[1])
        resposta2DOM.text(perguntas[perguntaAtual].respostas[2])
        resposta3DOM.text(perguntas[perguntaAtual].respostas[3])
        img.css("background-image","url()")
      } else {
        alert('Acabou!!!')
        $('.buttons').css('display','none')
        $("#btnReiniciar").css('display','flex')
        $('.placar').css('border',' solid 3px')
      }
    }
    else{
        if(perguntaAtual < perguntasNacionais.length){
          $(`#resposta${perguntasNacionais[perguntaAtual].correta}`).addClass('normal')
          $(`#resposta${perguntasNacionais[perguntaAtual].correta}`).removeClass('acertoouu')
      }
      if (++perguntaAtual < perguntasNacionais.length){
        $(`#ano${perguntaAtual}`).addClass('selected-ano')
        perguntaDOM.text(perguntasNacionais[perguntaAtual].pergunta)
        resposta0DOM.text(perguntasNacionais[perguntaAtual].respostas[0])
        resposta1DOM.text(perguntasNacionais[perguntaAtual].respostas[1])
        resposta2DOM.text(perguntasNacionais[perguntaAtual].respostas[2])
        resposta3DOM.text(perguntasNacionais[perguntaAtual].respostas[3])
        img.css("background-image","url()")
      } else {
        alert('Acabou!!!')
        $('.buttons').css('display','none')
        $("#btnReiniciar").css('display','flex')
        $('.placar').css('border',' solid 3px')
      }
    }
}
    

function selecionarResposta (id) {
  $('.certa').removeClass('certa')
  $(`#resposta${id}`).removeClass('normal')  
  $(`#resposta${id}`).addClass('certa')
  respostaSelecionada = id 
}

function refazerTeste(){
    window.location.reload()
}


function confirmar(){
    if(this.categoria==1){
        img.css("background-image","url(" + perguntas[perguntaAtual].img + ")")
        if(perguntas[perguntaAtual].correta == respostaSelecionada){
          $("#score-title-text-acertos").text(++acertos)
        } else {
          $("#score-title-text-erros").text(++erros)
        }
        //pular()
        let a  = $(`#resposta${perguntas[perguntaAtual].correta}`)
        a.removeClass('normal')
        a.removeClass('certa')
        a.addClass('acertoouu')
        $("#btnconfirmar").css("display","none")
        $("#btnProxima").text("Próxima")
    }
    else{
        img.css("background-image","url(" + perguntasNacionais[perguntaAtual].img + ")")
        if(perguntasNacionais[perguntaAtual].correta == respostaSelecionada){
          $("#score-title-text-acertos").text(++acertos)
        } else {
          $("#score-title-text-erros").text(++erros)
        }
        //pular()
        let a  = $(`#resposta${perguntasNacionais[perguntaAtual].correta}`)
        a.removeClass('normal')
        a.removeClass('certa')
        a.addClass('acertoouu')
        $("#btnconfirmar").css("display","none")
        $("#btnProxima").text("Próxima")
    }
}
