(function(){
  
  // VARIABLES
  
  const slider = document.querySelector('.horizontal-scroll__items');
  let isDown = false;
  let startX;
  let scrollLeft;

  // EVENTS
  
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('horizontal-scroll__items--active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('horizontal-scroll__items--active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('horizontal-scroll__items--active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });

})();