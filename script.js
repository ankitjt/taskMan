let createTaskScreen = document.querySelector(".createTaskScreen"),
    createTaskNavLink = document.querySelector(".createTaskNavLink"),
    closeCreateTaskScreen = document.querySelector(".closeCreateTaskScreen"),
    downArrows = document.querySelectorAll(".downArrow"),
    upArrow = document.querySelectorAll(".upArrow"),
    prioritySection = document.querySelector(".prioritySection"),
    taskStats = document.querySelector(".taskStats")

createTaskNavLink.onclick = () => {
    console.log('20');
    createTaskScreen.classList.add("block")
    createTaskScreen.classList.remove("hidden")
}

closeCreateTaskScreen.onclick = () => {
    createTaskScreen.classList.add("hidden")
}

for (let thisDrop of downArrows) {
    console.log(thisDrop)
    thisDrop.onclick = () => {
        // let selectedTab = thisDrop.parentElement.parentElement.parentElement.childNodes[7]
        // selectedTab.classList.toggle("hidden")
        // console.log(selectedTab)
        // for (let thisSelectedTab of selectedTab) {
        // }
        // let a = selectedTab.querySelector(".taskStats")
        // a.classList.toggle("hidden")
    }
}


upArrow.onclick = () => {
    upArrow.classList.add("hidden")
    taskStats.classList.add("hidden")
    downArrow.classList.remove("hidden")
}


