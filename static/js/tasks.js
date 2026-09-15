// Tasks page: loads tasks from the API, handles creation, and client-side search/priority filtering

let allTasks = [];

// Fetch the full task list from the backend and re-render
function loadTasks() {
    fetch("/api/tasks")
        .then((res) => res.json())
        .then((tasks) => {
            allTasks = tasks;
            renderTasks();
        });
}

// Apply the current search text + priority filter to allTasks and draw the <ul>
function renderTasks() {
    const list = document.getElementById("task-list");
    const search = document.getElementById("task-search").value.toLowerCase();
    const priority = document.getElementById("task-priority-filter").value;

    const filtered = allTasks.filter((task) => {
        const matchesSearch = task.title.toLowerCase().includes(search);
        const matchesPriority = !priority || task.priority === priority;
        return matchesSearch && matchesPriority;
    });

    list.innerHTML = "";
    if (filtered.length === 0) {
        list.innerHTML = "<li>No tasks found.</li>";
        return;
    }

    filtered.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = `[${task.priority}] ${task.title}`;
        list.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadTasks();

    document.getElementById("task-search").addEventListener("input", renderTasks);
    document.getElementById("task-priority-filter").addEventListener("change", renderTasks);

    // Submit a new task via the API, then refresh the list
    document.getElementById("new-task-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("new-task-title").value;
        const priority = document.getElementById("new-task-priority").value;

        fetch("/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, priority }),
        }).then(() => {
            document.getElementById("new-task-title").value = "";
            loadTasks();
        });
    });
});
