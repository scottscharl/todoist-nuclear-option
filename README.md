# ☢️ Todoist Nuclear Option

Hae you ever wanted to just delete all tasks and start over?

## Get Started

- Clone this repository.

- Create a `.env` file with `TODOIST_API_TOKEN="__your__token__"`

- Run the script with `node .`

## Nervous? Don't worry.

Before deleting, the script saves a timestamped JSON file backup of all your Todoist tasks in `./backups`, (for example, `2024-02-14T12:00:00:00.572Z.json`).

Run `node restore.js 2024-02-14T12:00:00:00.572Z.json` to restore all tasks from the backup file.
