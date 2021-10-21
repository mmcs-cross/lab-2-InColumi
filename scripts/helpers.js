const GAUGE_MAX = 329

function setGaugePercent($node, percent) {
  const $gaugeCircle = $node.querySelector('.gauge__cirlce-arc')
  const $gaugePercent = $node.querySelector('.gauge__percent')

  const value = GAUGE_MAX * (percent / 100)

  $gaugeCircle.setAttribute('stroke-dasharray', `${value} ${GAUGE_MAX}`)
  $gaugePercent.innerText = 1 + "%"
}

function saveState(state) {
  localStorage.setItem('todayAppState', JSON.stringify(state))
}

function getStoredStateOrDefault(defaultState) {
  const stateAsStr = localStorage.getItem('todayAppState')
  if (stateAsStr) {
    return JSON.parse(stateAsStr)
  } else {
    return defaultState
  }
}

function addBoardAndCheckEffectOnClick(task) {
  const $rectagle = task.querySelector(".rectangle")
  const $text = task.querySelector(".task-item__text")
  const $item_remove = task.querySelector(".task-item_remove")

  $rectagle.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('rectangle_checked_true')
    $text.classList.toggle('task-item_text_line-through')
    $item_remove.classList.toggle('task-item_remove_view_true')
  })
}

function incrTask(items) {
  if (items != null) {
    let count = document.querySelector('.todo-progress_todo-count').innerText
    let text = document.querySelector('.todo-progress_todo-text').innerText
    text.innerText  = (items.length > 1 ? "tasks to do" : "tasks to do")
    count.innerText = items.length
  }
}


function addNewTask(text, $newTaskHTML) {
  if (text != "") {

    let new_task = document.createElement('div')
    new_task.className = "task-item"
    new_task.innerHTML = $newTaskHTML

    new_task.querySelector('.task-item__text').textContent = text

    new_task.addEventListener('click', (e) => {
      e.target.classList.toggle('task-item_blue-border')
    })

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