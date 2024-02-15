import { TodoistApi } from "@doist/todoist-api-typescript";
import "dotenv/config";
import fs from "fs";

const api = new TodoistApi(process.env.TODOIST_API_TOKEN);

const dateString = new Date().toISOString();
console.log(`\n☢️ TODOIST NUCLEAR OPTION ☢️\n`);
api
  .getTasks()
  .then((tasks) => {
    console.log(`${tasks.length} task(s) found. Deleting...`);
    fs.writeFileSync(
      `./backups/${dateString}.json`,
      JSON.stringify({ timestamp: dateString, tasks: tasks })
    );
    tasks.forEach((task) => {
      api
        .deleteTask(task.id)
        .then((isSuccess) => {
          let cutoff = 20;
          let ellipsis = "";
          if (task.content.length > cutoff) {
            ellipsis = "...";
          }
          console.log(
            `✓ Deleted task ${task.id} "${task.content.slice(
              0,
              15
            )}${ellipsis}"`
          );
        })
        .catch((error) => console.log(error));
    });
  })
  .catch((error) => console.log(error));
