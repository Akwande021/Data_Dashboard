# Data_Dashboard
Dashboard that reflects the users information and tasks
Nexus Dashboard
A personal multi-domain data dashboard and task manager built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just open index.html and go.
Features

Multi-domain tracking — Finance, Projects, Fitness, Study
Priority task manager — Critical / High / Medium / Low priority levels
Persistent storage — All tasks and state saved in localStorage
Charts & analytics — Chart.js powered bar, line, donut charts per domain
Dark mode — Full dark/light theme toggle
Collapsible sidebar — Clean navigation between domains
Add tasks from anywhere — Quick-add modal on every page
Filter & search — Tasks page with filtering by domain, priority, and search

Pages
PageDescriptionindex.htmlOverview dashboard — stats, charts, priority strip, recent taskspages/finance.htmlFinance tracker — balance, income/expenses, spending breakdownpages/projects.htmlProjects tracker — progress bars, task counts, deadlinespages/fitness.htmlFitness tracker — workout streaks, weekly activity chartpages/study.htmlStudy tracker — daily hours, subjects breakdown, goalspages/tasks.htmlAll tasks — grouped by priority, filterable, searchable
Getting Started
Option 1 — Open directly
Just open index.html in your browser. No server needed.
Option 2 — Live server (recommended)
bash# Using VS Code Live Server extension, or:
npx serve .
# Then visit http://localhost:3000
Option 3 — GitHub Pages
Push to GitHub and enable Pages under Settings → Pages → Deploy from branch main.
Customising Your Data
Edit js/data.js to change:

Your tasks, projects, and financial figures
Fitness and study stats
Color scheme per domain

All data is stored in localStorage once the app runs — changes you make in the UI persist across sessions.
Project Structure
nexus-dashboard/
├── index.html          # Overview page
├── css/
│   └── style.css       # All styles + CSS variables + dark mode
├── js/
│   ├── data.js         # Shared data store (NexusDB)
│   └── app.js          # Overview page logic + charts
└── pages/
    ├── finance.html
    ├── projects.html
    ├── fitness.html
    ├── study.html
    └── tasks.html
Tech Stack

HTML / CSS / JS — zero dependencies, no build step
Chart.js 4.4 — charts and graphs
Lucide Icons — icon set
Google Fonts — Syne (display) + DM Sans (body)

Roadmap Ideas

 Export data to CSV
 Recurring tasks / habits tracker
 Budget categories editor
 Mobile PWA support
 More chart types (heatmap calendar, gauge)
 Multi-user / cloud sync via a backend

License
