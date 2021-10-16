document.addEventListener('DOMContentLoaded', function () {
    let new_item = document.createElement('div')
    new_item.className = "task-item"
    new_item.innerHTML = document.getElementsByClassName('task-item').innerHTML
    new_item.style.display = 'block'
    document.getElementsByClassName('task-list')
    // const $rectanglelogo = document.querySelector('task-list_rectangle-logo');
    // $rectanglelogo.addEventListener('click'){
    //     document.getElementsByClassName('task-list').appendChild(new_item)
    // })
  })