document.addEventListener('DOMContentLoaded', function () {
  const $task_list_add_new_task = document.querySelector(".task-list_add-new-task")
  const $text_new_task = document.getElementsByTagName('textarea')

  $task_list_add_new_task.addEventListener('click', (e) => {
    const $inner_html_new_task = document.querySelector(".new-task")

    addNewTask($text_new_task[0].value, $inner_html_new_task.innerHTML)
    $text_new_task[0].value = ""
  })
})

document.querySelector('textarea').addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    const $inner_html_new_task = document.querySelector(".new-task")

    addNewTask(e[0].value,  $inner_html_new_task.innerHTML)
    console.log(e[0].value)
    e[0].value = ""
  }
});