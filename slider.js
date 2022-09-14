const slide = {};
const cardsSlider = (function() {
  
let slides    = document.querySelectorAll('.cards__item'),
    NEXT      = document.querySelector('.cards__controls--next'),
    PREVIOUS  = document.querySelector('.cards__controls--prev'),
    count     = 0;
  
  NEXT.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(count < (slides.length - 1)) {
      count++;
      
      for(let i = 0; i < slides.length; i++) {
        let element = slides[i],
            trans   = 20 + element.clientWidth;
        
        slide.transform = trans * count;
        
        element.style.transform = 'translateX(-' + slide.transform + 'px)'
        
        console.log(slide.transform)
      }
    }
  })
  
  
  PREVIOUS.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(count > 0) {
      count--;
      
      for (let i = 0; i < slides.length; i++) {
        let element = slides[i],
            trans   = 20 + element.clientWidth;
        
        slide.transform = trans * count;
                
        element.style.transform = 'translateX(-' + slide.transform + 'px)'        
      }
    }
  })
  
})();