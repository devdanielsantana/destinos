// Menu scroll
var $nav = $(".menu");

$(function () {
  $(document).scroll(function () {
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// Smooth Scroll
// $('a[href^="#"]').on("click", function (e) {
//   e.preventDefault();

  
//   const scrollTop = $($(this).attr("href")).position().top - $nav.outerHeight();
  
//   $("html, body").animate({ scrollTop });
// });

// Chamar specialista

// Chamar specialista nos botões do menu

$('.call-to-contact').on('click', (e) => {
  e.preventDefault();

  $('.contact-modal').toggleClass('active')

})

// Chamar specialista nos botões do site

$('.call-specialist').on('click', (e) => {
  e.preventDefault();

  $('.contact-modal').toggleClass('active')

})


$('.contact-modal').on('click', (e) => {
  $('.contact-modal').toggleClass('active')
})

// Anima Scroll

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.7;

  function animaScroll() {

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;

      if(isSectionVisible) {
        section.classList.add('ativo')
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo')
      }
    });
  }

  if(sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll)
  }
}

initAnimacaoScroll()


// Anima Menu

// animação scroll quando se clica no menu
$('.menu a').on('click', function() {
  $("html, body").animate({
    scrollTop: $('#' +$(this).data('section')).offset().top // ir para a secção cujo o id é o valor do atributo `data-section` do item do menu onde clicamos
  }, 500);
});

// guardamos todas as distancias de cada secção até ao todo da página e respetivo id
var alturas = {};
$('.section').each(function () {
  alturas[$(this).prop('id')] = $(this).offset().top - 100; // ex: alturas['section_2'] = 600
});


// quando fazemos scoll vamos percorrer o nosso obj alturas e comparar a altura de cada secção com o que já andamos em scroll
$(window).on('scroll', function() {
  for(var seccao in alturas) {
    if($(window).scrollTop() >= alturas[seccao]) {
      $('.menu a').removeClass('selected'); // removemos a classe ative
      $('.menu a[data-section="' +seccao+ '"]').addClass('selected'); // adicionamos a class active ao item do menu cuja data-section é igual ao id da secção que está a uma maior ou igual distancia do topo do que aquela que percorremos com o scroll
    }
  }
});


// Animação de contador de números

function animaNumeros() {
  const tempo_intervalo = 5; //ms -> define a velocidade da animação
  const tempo = 4000; //ms -> define o tempo total da animaçao

$('.counter-up').each(function() {  
  let count_to = parseInt($(this).data('countTo'));
  let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
  let incremento = count_to / intervalos; //quanto cada contador deve aumentar
  let valor = 0;
  let el = $(this);
  
  let timer = setInterval(function() {
    if (valor >= count_to){ //se já contou tudo tem de parar o timer
      valor = count_to;
      clearInterval(timer);
    }
    
    let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    el.text(texto);
    valor += incremento;      
  }, tempo_intervalo);
});
}

let jaAtivo = 0

$(window).on('scroll', function() {
  for(var seccao in alturas) {
    if($(window).scrollTop() >= alturas['anima-numeros']) {
      if(jaAtivo === 0) {
        jaAtivo++
        animaNumeros()
      } else {
        null
      }
    }
  }
});



// Função de modais

let modalId
$('a[data-modal]').on('click', function(e) {
  e.preventDefault()
  modalId = e.target.id

  console.log(modalId)
  
  $(`div[data-modal=${modalId}]`).addClass('active')
});


$('div[data-modal]').on('click', () => {
  var box = $('div[data-modal] ');
  $('div[data-modal]').click(function(){
      if (!box.has(this).length) { // if the click was not within $box
        $(`div[data-modal]`).removeClass('active')
      }
  });
})



// Menu Mobile

$('.mobile-icon').on('click', () => {
  $('.menu-mobile').toggleClass('active')
})

$('.menu-mobile a').on('click', () => {
  $('.menu-mobile').toggleClass('active')
})


// Scroll 



