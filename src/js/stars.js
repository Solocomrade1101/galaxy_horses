const stars = document.querySelectorAll('.main__stars')
if(window.innerWidth < 900){
  stars.forEach(star => {
    star.style.display = 'none'
  })
}