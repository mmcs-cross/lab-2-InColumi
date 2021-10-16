document.addEventListener('DOMContentLoaded', (e) => {
  const $task_item = document.querySelector(".task-item")
  const $rectagle = $task_item.querySelector(".rectangle")
  const $text = $task_item.querySelector(".task-item__text")
  const $item_remove = $task_item.querySelector(".task-item_remove")
  
  $rectagle.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('rectangle_checked_true')
    $text.classList.toggle('task-item_text_line-through')
    $item_remove.classList.toggle('task-item_remove_view_true')
  })

  $task_item.addEventListener('click', (e)=> {
    e.target.classList.toggle('task-item_blue-border')
  })
})
