document.addEventListener("DOMContentLoaded", function () {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
        window.location.href = "index.html";
    }

    const tasks = JSON.parse(localStorage.getItem(`${currentUser}_tasks`)) || [];
    const tasksContainer = document.getElementById("tasks");
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");

    function showTasks() 
    {
        tasksContainer.innerHTML = "";
        tasks.forEach((task, index) => {
            const taskElement = document.createElement("div");
            taskElement.className = "task";
            taskElement.innerHTML = `
                <span>${task}</span>
                <button class="deleteTask" data-index="${index}">Delete</button>
            `;
            tasksContainer.appendChild(taskElement);
        });
    }

    function AddTask()
    {
        const newTask = taskInput.value.trim();
        if (newTask) 
        {
            tasks.push(newTask);
            localStorage.setItem(`${currentUser}_tasks`, JSON.stringify(tasks));
            taskInput.value = "";
            showTasks();
        }
    }

    function DeleteTask(e)
    {
        if (e.target.classList.contains("deleteTask")) 
        {
            const index = e.target.getAttribute("data-index");
            tasks.splice(index, 1);
            localStorage.setItem(`${currentUser}_tasks`, JSON.stringify(tasks));
            showTasks();
        }
    }

    addTaskButton.addEventListener("click", AddTask);

    tasksContainer.addEventListener("click", DeleteTask);

    document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
    });

    showTasks();
});