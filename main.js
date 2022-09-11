let lastScrollTop; // This Varibale will store the top position
navbar = document.getElementById('nav-bar'); 

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    navbar.style.top = '0px'
    document.querySelector('.header-container').style.borderBottom = '1px solid #dcdce0';
    
   
  }
  
  else{
    navbar.style.top = '125px'
    document.querySelector('.header-container').style.borderBottom = 'none';
    
    
  }
  
  lastScrollTop = scrollTop; //New Position Stored
});

//navbar animated-border-bottom

const navbarItems = document.querySelectorAll('.navbar-links-container')

function animatedBorderBottomMouseOver(event) {
  const animatedBorderBottom = document.querySelector('.animated-border-bottom');
  if (event.type === "mouseover") {
    animatedBorderBottom.style.height = '2px'
    animatedBorderBottom.style.width = event.currentTarget.clientWidth + "px";
    animatedBorderBottom.style.transform = "scale(1)";
    animatedBorderBottom.style.left = event.currentTarget.offsetLeft + "px";
  } else {
    animatedBorderBottom.style.width = event.currentTarget.clientWidth + "px";
    animatedBorderBottom.style.transform = "scale(0)";
  }
}

navbarItems.forEach((element,index) => {
  navbarItems[index].addEventListener('mouseover',animatedBorderBottomMouseOver)
  navbarItems[index].addEventListener('mouseleave',animatedBorderBottomMouseOver)
})



// burgermenu

const overLay = document.getElementById('overlay').addEventListener('click', function(){
  showBurgerMenu.style.transform = 'translateX(100%)'
  document.getElementById('overlay').style.display = "none";
})
const showBurgerMenu = document.getElementById('show-burgermenu')
const hideBurgerMenu = document.getElementById('hide-burgermenu').addEventListener('click', function(){
  showBurgerMenu.style.transform = 'translateX(100%)'
  document.getElementById('overlay').style.display = "none";
})

const hamburgerMenu = document.getElementById('hamburgermenu').addEventListener('click', function() {
  
  showBurgerMenu.style.transform = 'translateX(0)'
  document.getElementById("overlay").style.display = "block";
})


// burgermenu



// mega-menu-drop-down


const navbarCategory = document.getElementById('main-header-category')
const megaMenu = document.getElementById('mega-menu')


navbarCategory.addEventListener('mouseover',function(){
  document.getElementById("overlay").style.zIndex = "3";
  document.getElementById("overlay").style.display = "block";

})
navbarCategory.addEventListener('mouseleave',function(){
  document.getElementById("overlay").style.zIndex = "6";
  document.getElementById("overlay").style.display = "none";

})

megaMenu.addEventListener('mouseover',function(){
  document.getElementById("overlay").style.zIndex = "3";
  document.getElementById("overlay").style.display = "block";

})
megaMenu.addEventListener('mouseleave',function(){
  document.getElementById("overlay").style.zIndex = "6";
  document.getElementById("overlay").style.display = "none";

})

// swiper prev,next button 

