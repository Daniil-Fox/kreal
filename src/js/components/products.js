


const filtersPaths = {
  "filters" : {
    "staight" : "./products/5.mp4",
    "reverse" : "./products/5-reverse.mp4"
  },
  "aero" : {
    "staight" : "./products/1.mp4",
    "reverse" : "./products/1-reverse.mp4"
  },
  "dryer" : {
    "staight" : "./products/9.mp4",
    "reverse" : "./products/9-reverse.mp4"
  },
  "water" : {
    "staight" : "./products/6.mp4",
    "reverse" : "./products/6-reverse.mp4"
  },
  "apply" : {
    "staight" : "./products/2.mp4",
    "reverse" : "./products/2-reverse.mp4"
  },
  "sewerage" : {
    "staight" : "./products/3.mp4",
    "reverse" : "./products/3-reverse.mp4"
  },
  "clear" : {
    "staight" : "./products/4.mp4",
    "reverse" : "./products/4-reverse.mp4"
  },
  "box" : {
    "staight" : "./products/8.mp4",
    "reverse" : "./products/8-reverse.mp4"
  },
  "load" : {
    "staight" : "./products/7.mp4",
    "reverse" : "./products/7-reverse.mp4"
  },
}


const productsButtons = document.querySelectorAll('.products-btn')
const currentVideoContainer = document.querySelector('.products__video')
const currentVideo = currentVideoContainer.querySelector('video')

const buttonsWrapper = document.querySelector('.products__plug')


const productsImages = document.querySelector('.products__images')

const productsBack = document.querySelector('.products__back')

productsButtons.forEach(btn => {
  btn.addEventListener('click', e => {


    const dataCapture = btn.dataset.videoCapture

    productsBack.setAttribute('data-video-capture', dataCapture)

    const currentVideoSrc = filtersPaths[dataCapture]["staight"]
    currentVideo.removeEventListener('ended', setClasses)
    turnOnVideo(currentVideoSrc, dataCapture)
  })
})

productsBack.addEventListener('click', e => {
  const dataCapture = productsBack.dataset.videoCapture
  const currentVideoSrcReverse = filtersPaths['' + dataCapture]["reverse"]


  turnOffVideo(currentVideoSrcReverse, dataCapture)
})

function turnOnVideo(src, about){
  hidePlug()

  currentVideo.src = src

  currentVideoContainer.classList.add('active')

  currentVideo.play()
  const img = getImage(about)

  currentVideo.onended = function(e){
    setClasses("show", img, about)
  }
}

function turnOffVideo(src, about){
  hideInfo()
  currentVideo.src = src
  currentVideoContainer.classList.add('active')

  const img = getImage()
  currentVideo.play()
  currentVideo.onended = function(e){
    setClasses("hide", img)
  }
}

function setClasses(position, img, about = null){
  if(position == "show"){
    img.classList.add('active')
    showInfo(about)
    productsImages.classList.add('active')
    currentVideoContainer.classList.remove('active')

  } else {
    img.classList.remove('active')
    productsImages.classList.remove('active')
    currentVideoContainer.classList.remove('active')
    showPlug()
  }
}

function getImage(about){
  return productsImages.querySelector(`.products__img[data-image-about="${about}"]`) || productsImages.querySelector(`.products__img.active`)
}

function hidePlug(){
  buttonsWrapper.classList.add('hide')
}
function showPlug(){
  buttonsWrapper.classList.remove('hide')
}

async function showInfo(about){
  let response = await fetch('./products.json')
  let data = await response.json()

  const dataObject = data[about]
  const title = dataObject.title
  const desc = dataObject.text

  const info = document.querySelector('.products__info')
  const titleContainer = info.querySelector('.products__title')
  const textContainer = info.querySelector('.products__desc')

  titleContainer.textContent = title
  textContainer.textContent = desc
  info.classList.add('active')
}

function hideInfo(){
  const info = document.querySelector('.products__info')
  info.classList.remove('active')
  const titleContainer = info.querySelector('.products__title')
  const textContainer = info.querySelector('.products__desc')

  titleContainer.textContent = ""
  textContainer.textContent = ""
}
