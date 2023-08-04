document.querySelector('.burger__menu').addEventListener('click', () => {
  document.querySelector('.wrapper').style.display = 'none'
  document.querySelector('.adaptive').style.display = 'block'

})
document.querySelector('.adaptive__close').addEventListener('click', () => {
  document.querySelector('.wrapper').style.display = 'block'
  document.querySelector('.adaptive').style.display = 'none'
}
)
const adapNavigation = document.querySelector('.adaptive__navigation');
adapNavigation.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
  document.querySelector('.wrapper').style.display = 'block'
  document.querySelector('.adaptive').style.display = 'none'
  })
})