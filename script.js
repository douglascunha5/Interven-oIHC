


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

perguntaDOM.text(perguntas[0].pergunta)
resposta0DOM.text(perguntas[0].respostas[0])
resposta1DOM.text(perguntas[0].respostas[1])
resposta2DOM.text(perguntas[0].respostas[2])
resposta3DOM.text(perguntas[0].respostas[3])

function pular() {
  $("#btnconfirmar").css("display","")
  
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
    $('.result').css('display','flex')
    $('.buttons').css('display','none')
    $('.placar').css('border',' solid 3px')
  }
}
    

function selecionarResposta (id) {
  $('.certa').removeClass('certa')
  $(`#resposta${id}`).removeClass('normal')  
  $(`#resposta${id}`).addClass('certa')
  respostaSelecionada = id 
}



function confirmar(){
  if(confirm('Tem certeza?')){
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
  }
}
