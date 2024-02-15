import { TodoistApi } from "@doist/todoist-api-typescript";
import "dotenv/config";
import fs from "fs";

const api = new TodoistApi(process.env.TODOIST_API_TOKEN);

const backupFilename = process.argv[2];

// Unfortunately, task recurrences will be lost.

function restore() {
  const { tasks } = JSON.parse(fs.readFileSync(`./backups/${backupFilename}`));
  if (tasks.length === 0) {
    console.log("0 tasks found in backup file.");
    return;
  }
  console.log(`${tasks.length} task(s) found in backup file. Restoring...`);
  for (let i = 0; i < tasks.length; i++) {
    let newTask;
    if (tasks[i]["due"] === null) {
      newTask = tasks[i];
    } else {
      newTask = {
        ...tasks[i],
        due_date: tasks[i]["due"]["date"],
      };
    }
    api
      .addTask(newTask)
      .then((task) => console.log(`✓ Created task: ${task.content}`))
      .catch((error) => console.log(error));
  }
}
restore();
