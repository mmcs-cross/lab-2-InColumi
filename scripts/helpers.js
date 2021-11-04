localStorage.clear()

const GAUGE_MAX = 329

function isAllDone() {
  const $countDo = getCount('countDo')
  const $countDone = getCount('countDone')

  if ($countDo == $countDone){
    alert("All done!!!")
  }
}

function getCount(item) {
  const stateAsStr = localStorage.getItem(item)
  return (stateAsStr ? JSON.parse(stateAsStr) : 0)
}

function setGaugePercent() {
  const $node = document.querySelector('.gauge')
  const $countDo = getCount('countDo')
  const $countDone = getCount('countDone')
  const $gaugeCircle = $node.querySelector('.gauge__cirlce-arc')
  const $gaugePercent = $node.querySelector('.gauge__percent')

  let percent = 0
  if ($countDo != 0){
    percent = ($countDone / $countDo) *  100
    percent = Math.trunc(percent)
 }  
  const value = GAUGE_MAX * (percent / 100)
  $gaugeCircle.setAttribute('stroke-dasharray', `${value} ${GAUGE_MAX}`)
  $gaugePercent.innerText = percent + "%"
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
      if($rectagle.className == 'rectangle rectangle_checked_true'){
        decrTask('countDone', getCount('countDone'))
      }
      else{
        incrTask('countDone', getCount('countDone'))
      }
      e.currentTarget.classList.toggle('rectangle_checked_true')

      $text.classList.toggle('task-item_text_line-through')
      $item_remove.classList.toggle('task-item_remove_view_true')
      task.classList.toggle('task-item_blue-border')
      changeTextForCountDo(getCount('countDo') - getCount('countDone'))
      setGaugePercent()
      isAllDone()
    })
  }
}

function addListenerForRemove(item) {

  item.addEventListener('click', (e)=>{
    let itemsForDelete = e.currentTarget.parentElement
    let items = itemsForDelete.parentNode
    items.removeChild(itemsForDelete)

    if(itemsForDelete.querySelector('.task-item_remove.task-item_remove_view_true') != null)
    {
      decrTask('countDone', getCount('countDone'))
      decrTask('countDo', getCount('countDo'))
    }
    else{
      decrTask('countDo', getCount('countDo'))
    }
    changeTextForCountDo(getCount('countDo') - getCount('countDone'))
    setGaugePercent()
  })
}

function changeTextForCountDo(value) {
    const $gauge = document.querySelector('.gauge')
    let count = document.querySelector('.todo-progress_todo-count')
    let text = document.querySelector('.todo-progress_todo-text')
    text.innerText = (value > 1 ? "tasks to do" : "task to do")
    count.innerText = value
    setGaugePercent($gauge, value)
}

function decrTask(itemName, value) {
  if (value >= 0) {
    value -= 1
    saveCount(itemName, value)
  }
}

function incrTask(itemName, value) {
  if (value >= 0) {
    value += 1
    saveCount(itemName, value)
  }
}


function addNewTask(text, $newTaskHTML) {
  if (text != "") {

    let new_task = document.createElement('div')
    new_task.className = "task-item"
    new_task.innerHTML = $newTaskHTML

    new_task.querySelector('.task-item__text').textContent = text

    addBoardAndCheckEffectOnClick(new_task)
    addListenerForRemove(new_task.querySelector('.task-item_remove'))

    let task_list = document.querySelector(".task-list__tasks")
    let tasks = document.querySelectorAll(".task-item")
    if (tasks.length != 0) {
      task_list.insertBefore(new_task, tasks[0])
    }
    else {
      task_list.appendChild(new_task)
    }
    incrTask('countDo', getCount('countDo'))
    changeTextForCountDo(getCount('countDo')- getCount('countDone'))
  }
}