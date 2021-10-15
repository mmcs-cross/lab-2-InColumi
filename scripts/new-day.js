document.addEventListener('DOMContentLoaded', (e) => {
    const $newDay = document.querySelector(".new-day_button")

    $newDay.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle("new-day_button_pressed")
    })
})