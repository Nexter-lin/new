let index = 0;

show_slide = (i) => {
  index += i;

  let images = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < images.length; i++) 
    images[i].style.display = "none";

  if (index > images.length - 1) 
    index = 0 ;
  
  if (index < 0)
    index = images.length - 1;

  images[index].style.display = "block";
  dots[index].className += " active";
}


const anchors1 = document.querySelectorAll('a[href*="#store"]')

for (let anchor of anchors1) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const anchors2 = document.querySelectorAll('a[href*="#last"]')

for (let anchor of anchors2) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const anchors3 = document.querySelectorAll('a[href*="#con"]')

for (let anchor of anchors3) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}