const GAUGE_MAX = 329

function setGaugePercent($node, percent) {
  const $gaugeCircle = $node.querySelector('.gauge__cirlce-arc')
  const $gaugePercent = $node.querySelector('.gauge__percent')

  const value = GAUGE_MAX * (percent / 100)

  $gaugeCircle.setAttribute('stroke-dasharray', `${value} ${GAUGE_MAX}`)
  $gaugePercent.innerText = percent
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

function addNewTask(text, $newTaskHTML) {
  if (text != "What's new ?") {

    let new_task = document.createElement('div')
    new_task.className = "task-item"
    new_task.innerHTML = $newTaskHTML

    new_task.querySelector('.task-item__text').textContent = text

    new_task.addEventListener('click', (e)=>{
      e.target.classList.toggle('task-item_blue-border')
    })

    const $rectagle = new_task.querySelector(".rectangle")
    const $text = new_task.querySelector(".task-item__text")
    const $item_remove = new_task.querySelector(".task-item_remove")
  
    $rectagle.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('rectangle_checked_true')
      $text.classList.toggle('task-item_text_line-through')
      $item_remove.classList.toggle('task-item_remove_view_true')
    })

    let tasks = document.querySelector(".task-list__tasks")
    tasks.appendChild(new_task)
  }
}