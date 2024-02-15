# ☢️ Todoist Nuclear Option

Have you ever wanted to just delete all tasks and start over?

Here's a NodeJS script that uses the Todist JavaScript SDK to handle it for you. All you need is your Todoist API key

## Get Started

- Clone this repository to your machine or open a copy on [GitHub Codespaces](https://curly-fortnight-gr5xj4wpgrq3v6qx.github.dev)

- Create a `.env` file and add your [Todoist API Token](https://todoist.com/help/articles/find-your-api-token-Jpzx9IIlB), like this:
  `TODOIST_API_TOKEN="xxxxxxxxxxxxxxxxxxxxx"`

- Run the script with `node .`

## Nervous? Don't worry.

Before deleting, the script saves a timestamped JSON file backup of all your Todoist tasks in `./backups`.

Run `node restore.js 2024-02-14T12:00:00:00.572Z.json` to restore all tasks from the backup file.
