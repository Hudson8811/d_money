
$(document).ready(() => {
    $(window).scroll(() => {
        if($(document).scrollTop() > 200){
            $('nav').addClass('active');
            $('.telephone-menu').addClass('menublack');
        }else{
            $('nav').removeClass('active');
            $('.telephone-menu').removeClass('menublack');
        }
    });

    $('.close').click(function(){
        $(this).parent('.block').fadeOut('slow');
    });
    $('.close.modaler').click(function(){
        $(this).parentsUntil('.modal').fadeOut('slow', () => {
            $('.modal').fadeOut('slow');
        });
    });
    $('.modal#select_char td').click(function(){
        if($(this).find('.active').length === 0){
            let active = document.createElement('div');
            active.className = 'active fa fa-check';
            
            $(this).append(active);
        }else{
            $(this).find('.active').remove();
        }
    });
    $('#select_char_reset').click(function(){
        $('.modal#select_char tr td').find('.active').remove();
    })

      let hamburger = document.querySelector("#menuToggle");
      let closeImage = document.querySelector(".close-image");
      let menu = document.querySelector('.telephone-menu');
      let nav = document.querySelector('#nav');
      function openNav() {
        hamburger.classList.add("hide-burger");
        closeImage.classList.add("activate-close-image");
        menu.classList.add('menu-class')
       
      }
      
      function closeNav() {
        hamburger.classList.remove("hide-burger");
        closeImage.classList.remove("activate-close-image");
        menu.classList.remove('menu-class')
       
      }
      
      // Hamburger Menu Spin
      
      hamburger.addEventListener('click', () => hamburger.classList.contains('hide-burger') ? closeNav() : openNav());
      closeImage.addEventListener('click', () => hamburger.classList.contains('hide-burger') ? closeNav() : openNav());
      closeNav();
});


const slider = document.querySelector('#main_left, div');
let isDown = false;
let startX;
let scrollLeft;


$(document).on('touchstart', '#main_left, div', function(e){
    e.stopPropagation(); //stops 'ghost clicks' (double clicking)
    // isDown = true;
   
    slider.classList.add('addstyle');
    let pageX = e.originalEvent.touches[0].pageX;
    startX = pageX - slider.offsetLeft;
    console.log('touchstart',e.originalEvent.touches[0], slider.offsetLeft, startX ,123123)
    scrollLeft = slider.scrollLeft;
});

// slider.addEventListener('touchstart', (e) => {
//   isDown = true;
//   console.log('touchstart',123123)
//   slider.classList.add('addstyle');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
slider.addEventListener('touchmove', () => {
  isDown = false;
  slider.classList.remove('addstyle');
});
slider.addEventListener('touchend', () => {
  isDown = false;
  slider.classList.remove('addstyle');
});
slider.addEventListener('touchmove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});





/* DRAG AND DROP */

const boxes = document.querySelectorAll('.imgPad');
const dropzone = document.querySelector('.dropzone');
const hidemenu = document.querySelectorAll('.hidemenu');
console.log(dropzone)

let html = document.querySelector('#yes-drop')

boxes.forEach(box => {
    
  console.log(box)
  box.addEventListener('touchstart', (e)=>{
    console.log('touched')
    box.classList.add('red')
    setTimeout(()=>{
        box.classList.remove('red')
    },2000)
    
        document.querySelector('.dropzone').addEventListener('click', ()=>{
            box.parentElement.remove()
            hidemenu.forEach(hide => hide.remove())
            if(box.classList.contains('red')){
            
               
            $('.dropzone').append(box.children);
            }
            if(document.querySelector('.dropzone').children.length > 2){
                document.querySelector('.abs .text').classList.add('hide')
                document.querySelector('#hiddenText').classList.add('hide')
                document.querySelector('#hiddenIco').classList.add('hide')
                document.querySelector('.dropzone').classList.remove('flex-center')
                document.querySelector('.dropzone').classList.add('addFlex')
            }
        })
    
  
  

  })
})


$('.nice-select').niceSelect();