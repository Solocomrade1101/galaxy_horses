let 
  images = document.images,
  images_loaded_count = 0,
  pers_display = document.querySelector('.loader__text'),
  preloader = document.querySelector('.preloader');

for(let i = 0; i < images.length; i++){
  images_clone = new Image()
  images_clone.onload = image_loaded;
  images_clone.onerror = image_loaded;
  images_clone.src = images[i].src;

}

function image_loaded(){
  images_loaded_count++;


  if( images_loaded_count >= images.length){
    setTimeout(function(){
      if(!preloader.classList.contains('done')){
        preloader.classList.add('done');
      }
    }, 3000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(function(){
    document.querySelector('.loader__horse').style.opacity = '1'
  }, 1000)
} )