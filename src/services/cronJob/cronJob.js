import Task from "../../models/task";
import User from "../../models/users";

const cron = require("node-cron");

function scheduleCronJob() {
  // runs after every 2 min
  cron.schedule("*/1 * * * *", () => {
    async function updatePendingTasksToStarted() {
      try {
        const currentTime = new Date();
        const updatedTasks = await Task.find({
          status: "pending",
          startDate: { $lt: currentTime },
        }).lean();

        console.log(
          `Found ${updatedTasks.length} tasks to update to "started" status.`
        );

        // Update the tasks to "started" status
        const updatedTaskIds = updatedTasks.map((task) => task._id);

        await Task.updateMany(
          { _id: { $in: updatedTaskIds } },
          { $set: { status: "started" } }
        ).exec();

        console.log(`Updated ${updatedTaskIds.length} tasks to "started" status.`);
      } catch (error) {
        throw new Error("Failed to update tasks: " + error.message);
      }
    }

    // Usage
    updatePendingTasksToStarted();
  });
}

module.exports = scheduleCronJob;
