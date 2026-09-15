// Shared behavior for every page: sidebar collapse + dark mode toggle, both persisted in localStorage

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const themeToggle = document.getElementById("theme-toggle");

    // Restore saved sidebar state
    if (localStorage.getItem("sidebar-collapsed") === "true") {
        sidebar.classList.add("collapsed");
    }

    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        localStorage.setItem("sidebar-collapsed", sidebar.classList.contains("collapsed"));
    });

    // Restore saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    }

    themeToggle.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", current);
        localStorage.setItem("theme", current);
    });

    // Populate the "recent tasks" preview on the overview page, if present
    const recentList = document.getElementById("recent-tasks-list");
    if (recentList) {
        fetch("/api/tasks")
            .then((res) => res.json())
            .then((tasks) => {
                recentList.innerHTML = "";
                tasks.slice(0, 5).forEach((task) => {
                    const li = document.createElement("li");
                    li.textContent = `[${task.priority}] ${task.title}`;
                    recentList.appendChild(li);
                });
                if (tasks.length === 0) {
                    recentList.innerHTML = "<li>No tasks yet.</li>";
                }
            });
    }
});
