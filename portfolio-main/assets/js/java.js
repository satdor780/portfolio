function scrollTo(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

var intro = document.querySelector('.btn');
var portfolio = document.querySelector('.portfolio');

intro.addEventListener('click', () => {
  scrollTo(portfolio);
});


$(document).ready(function(){
 

  //  $('.tab_2').on('click', function(){
  //     $('.content').addClass('none')
  //     $('.content_wp').removeClass('none')
  //     $('.tab_1').removeClass('tab_active')
  //     $(this).toggleClass('tab_active')
  //     $('.content_wp').removeClass('none')
  // });

  // $('.tab_1').on('click', function(){
  //     $('.content_wp').addClass('none')
  //     $('.tab_2').removeClass('tab_active')
  //     $(this).toggleClass('tab_active')
  //     $('.content').removeClass('none')
     
  // });

  //   $('.tab_0').on('click', function(){
  //     $('.content').addClass('none')
  //     $('.content_wp').addClass('none')
  //     $('.tab_2').removeClass('tab_active')
  //     $('.tab_1').removeClass('tab_active')
  //     $(this).toggleClass('tab_active')
  //     $('.content__all').removeClass('none')
  // });


    $('.tab').on('click', function(){
      $('.content').addClass('none')
      $('.content' + '__' + this.id).removeClass('none')
      $('.tab').removeClass('tab_active')
      $(this).addClass('tab_active')
    });
});

