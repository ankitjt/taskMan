let createTaskScreen = document.querySelector(".createTaskScreen"),
    createTaskNavLink = document.querySelector(".createTaskNavLink"),
    closeCreateTaskScreen = document.querySelector(".closeCreateTaskScreen"),
    downArrows = document.querySelectorAll(".downArrow"),
    upArrows = document.querySelectorAll(".upArrow"),
    prioritySection = document.querySelector(".prioritySection"),
    taskStats = document.querySelectorAll(".taskStats")

createTaskNavLink.onclick = () => {
    createTaskScreen.classList.add("block")
    createTaskScreen.classList.remove("hidden")
    createTaskScreen.style.top = 0
}

closeCreateTaskScreen.onclick = () => {
    createTaskScreen.classList.add("hidden")
}

for (let thisDownArrow of downArrows) {
    thisDownArrow.onclick = () => {
        let selectedBox = thisDownArrow.parentElement.parentElement.parentElement.childNodes[7]
        let upArrowBtn = thisDownArrow.parentElement.childNodes[3]
        upArrowBtn.classList.remove("hidden")
        thisDownArrow.classList.add("hidden")
        selectedBox.classList.remove("hidden")
    }
}

for (let thisUpArrow of upArrows) {
    thisUpArrow.onclick = () => {
        let selectedBox = thisUpArrow.parentElement.parentElement.parentElement.childNodes[7]
        let upArrowBtn = thisUpArrow.parentElement.childNodes[3]
        let bringDownArrow = thisUpArrow.parentElement.childNodes[1]
        upArrowBtn.classList.add("hidden")
        bringDownArrow.classList.remove("hidden")
        selectedBox.classList.add("hidden")
    }
}





