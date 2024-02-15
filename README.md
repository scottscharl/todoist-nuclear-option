# ☢️ Todoist Nuclear Option

Have you ever wanted to just delete all tasks and start over?

Here's a NodeJS script that uses the Todist JavaScript SDK to handle it for you. All you need is your Todoist API key

## Get Started

- Clone this repository to your machine or open a copy on [GitHub Codespaces](https://curly-fortnight-gr5xj4wpgrq3v6qx.github.dev)

- Find your [Todoist API Token](https://todoist.com/help/articles/find-your-api-token-Jpzx9IIlB)

- Create a `.env` file and add your token, like this:
  `TODOIST_API_TOKEN="xxxxxxxxxxxxxxxxxxxxxxxxxxx"`

- Run the script with `node .`

## Nervous? Don't worry.

Before deleting, the script saves a timestamped JSON file backup of all your Todoist tasks in `./backups`, (for example, `2024-02-14T12:00:00:00.572Z.json`).

Run `node restore.js FILENAME.json` to restore all tasks from the backup file.
