document.addEventListener('DOMContentLoaded', (e) => {
  const $rectagle = document.querySelector(".rectangle")
  const $icon = $rectagle;
  
  console.log($icon.getElementsByClassName(''))
  $rectagle.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('rectangle_checked_true')
  })
})
