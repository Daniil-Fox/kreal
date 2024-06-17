const servicesItems = document.querySelectorAll('.services__item')
const servicesTabs = document.querySelectorAll('.services__wrapper')

const clearActive = () => {
  servicesItems.forEach(item => item.classList.remove('active'))
  servicesTabs.forEach(item => item.classList.remove('active'))
}
servicesItems.forEach(item => {
  item.addEventListener('click', e => {

    const dataset = item.dataset.tab

    clearActive()
    const currentActive = document.querySelector(`.services__wrapper[data-tab="${dataset}"]`)

    item.classList.add('active')
    currentActive.classList.add('active')
  })
})
