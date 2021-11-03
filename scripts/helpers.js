const GAUGE_MAX = 329
saveCount('countDo', 0)
saveCount('countDone', 0)

function getCount(item, count) {
  const stateAsStr = localStorage.getItem(item)
  return (stateAsStr ? JSON.parse(stateAsStr) : 0)
}

function setGaugePercent($node, val) {
  const $gaugeCircle = $node.querySelector('.gauge__cirlce-arc')
  const $gaugePercent = $node.querySelector('.gauge__percent')

  const value = GAUGE_MAX * (val / 100)

  $gaugeCircle.setAttribute('stroke-dasharray', `${value} ${GAUGE_MAX}`)
  $gaugePercent.innerText = value + "%"
}

function saveCount(item, count) {
  localStorage.setItem(item, JSON.stringify(count))
}

function addBoardAndCheckEffectOnClick(task) {
  if (task != null) {
    const $rectagle = task.querySelector(".rectangle")
    const $text = task.querySelector(".task-item__text")
    const $item_remove = task.querySelector(".task-item_remove")

    $rectagle.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('rectangle_checked_true')
      saveCount('countDone', getCount('countDone') + 1)
      $text.classList.toggle('task-item_text_line-through')
      $item_remove.classList.toggle('task-item_remove_view_true')
      task.classList.toggle('task-item_blue-border')
    })
  }
}

function incrTask(items) {
  if (items != null) {
    countDo = items.length + 1
    const $gauge = document.querySelector('.gauge')
    setGaugePercent($gauge, countDo)
    let count = document.querySelector('.todo-progress_todo-count')
    let text = document.querySelector('.todo-progress_todo-text')
    text.innerText = (countDo > 1 ? "tasks to do" : "task to do")
    count.innerText = countDo
    saveCount('countDo', countDo)
  }
}


function addNewTask(text, $newTaskHTML) {
  if (text != "" || text == "") {

    let new_task = document.createElement('div')
    new_task.className = "task-item"
    new_task.innerHTML = $newTaskHTML

    new_task.querySelector('.task-item__text').textContent = text

    addBoardAndCheckEffectOnClick(new_task)

    let task_list = document.querySelector(".task-list__tasks")
    let tasks = document.querySelectorAll(".task-item")
    if (tasks.length != 0) {
      task_list.insertBefore(new_task, tasks[0])
    }
    else {
      task_list.appendChild(new_task)
    }
    incrTask(tasks)
  }
}