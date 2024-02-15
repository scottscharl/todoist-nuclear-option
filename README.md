# ☢️ Todoist Nuclear Option ☢️

_Nuke your Todoist account._

Have you ever wanted to delete your entire to-do list and start over from zero?

This NodeJS script uses the [Todoist API's JavaScript SDK](https://developer.todoist.com/rest/v2/#javascript-sdk) to delete all your active tasks and give you a fresh start.

## Get Started

- Clone this repository to your machine or open it on [GitHub Codespaces](https://curly-fortnight-gr5xj4wpgrq3v6qx.github.dev).

- Create a `.env` file and add your [Todoist API Token](https://todoist.com/help/articles/find-your-api-token-Jpzx9IIlB), like this:
  `TODOIST_API_TOKEN=xxxxxxxxxxxxxxxxxxxxx`

- Run the script in the terminal with `node .`

## Nervous? Don't worry.

Before deleting, the script saves a timestamped JSON file backup of all your Todoist tasks in `./backups`. You can also [create your own backup at Settings/Backups](https://app.todoist.com/app/settings/backups) in the Todoist web app.

To restore all tasks from one of the JSON backup files in `./backup`, in the terminal run `node restore.js THE_FILENAME`. Unfortunately, task recurrence rules are lost, but the due dates should be restored.
