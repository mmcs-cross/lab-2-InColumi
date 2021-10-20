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

function addNewTask(text, $newTask) {
  console.log(text)
  if (text != "What's new ?") {

    let new_div = document.createElement('div')
    new_div.className = "task-item"
    new_div.innerHTML = $newTask

    let new_div_text = new_div.querySelector('.task-item__text')
    new_div_text.textContent = text

    let tasks = document.querySelector(".task-list__tasks")
    tasks.appendChild(new_div)
  }
}