document.addEventListener('DOMContentLoaded', (e) => {
    const $newDay = document.querySelector(".new-day_button")

    $newDay.addEventListener('click', (e) => {
        console.log(e.target)
        console.log(e.currentTarget.classList)
        e.currentTarget.classList.toggle("new-day_button_pressed")
    }, true)
})