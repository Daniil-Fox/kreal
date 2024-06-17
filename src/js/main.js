import './_components.js';



const servicesSectionBg = document.querySelector('.services__bg')
servicesSectionBg.addEventListener('animationend', e =>{
  servicesSectionBg.style.transform = 'scale(1)'
})
const observer = new IntersectionObserver((entries, observer) => {
  if(entries[0].isIntersecting){
    servicesSectionBg.classList.add('animate')

  } else {
    setTimeout(() => {
      servicesSectionBg.classList.remove('animate')
    }, 500)
  }
}, {
  threshold: 0.1
})

observer.observe(servicesSectionBg)
