// Menu scroll
var $nav = $(".menu");

$(function () {
  $(document).scroll(function () {
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// Smooth Scroll
$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();

  
  const scrollTop = $($(this).attr("href")).position().top - $nav.outerHeight();
  
  $("html, body").animate({ scrollTop });
});

$('.call-to-contact').on('click', (e) => {
  e.preventDefault();

  $('.contact-modal').toggleClass('active')

})


$('.contact-modal').on('click', (e) => {
  $('.contact-modal').toggleClass('active')
})

// Anima Scroll

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6;

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

function initAnimacaoMenu() {
  const sections = document.querySelectorAll('[data-menu]');
  const menu = document.querySelectorAll('.menu nav ul li a');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;

      if(isSectionVisible) {
        console.log(section)
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

initAnimacaoMenu()