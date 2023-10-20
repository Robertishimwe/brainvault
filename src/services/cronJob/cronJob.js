// import Task from "../../models/task";
// import User from "../../models/users";

// const cron = require("node-cron");

// function scheduleCronJob() {
//   // runs after every 2 min
//   cron.schedule("*/1 * * * *", () => {
//     async function updatePendingTasksToStarted() {
//       try {
//         const currentTime = new Date();
//         const updatedTasks = await Task.find({
//           status: "pending",
//           startDate: { $lt: currentTime },
//         }).lean();

//         console.log(
//           `Found ${updatedTasks.length} tasks to update to "started" status.`
//         );

//         // Update the tasks to "started" status
//         const updatedTaskIds = updatedTasks.map((task) => task._id);

//         await Task.updateMany(
//           { _id: { $in: updatedTaskIds } },
//           { $set: { status: "started" } }
//         ).exec();

//         console.log(`Updated ${updatedTaskIds.length} tasks to "started" status.`);
//       } catch (error) {
//         throw new Error("Failed to update tasks: " + error.message);
//       }
//     }

//     // Usage
//     updatePendingTasksToStarted();
//   });
// }

// module.exports = scheduleCronJob;


import Task from "../../models/task";

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

    async function updateTasksToBreached() {
      try {
        const currentTime = new Date();
        const updatedTasks = await Task.find({
          status: { $ne: "completed" }, // Status is not "completed"
          breached: { $ne: true },
          endDate: { $lt: currentTime }, // endDate is less than the current time
        }).lean();

        console.log(
          `Found ${updatedTasks.length} tasks to update to "breached" status.`
        );

        // Update the tasks to "breached" status
        const updatedTaskIds = updatedTasks.map((task) => task._id);

        await Task.updateMany(
          { _id: { $in: updatedTaskIds } },
          { $set: { breached: true } } // Set breached to true
        ).exec();

        console.log(`Updated ${updatedTaskIds.length} tasks to "breached" status.`);
      } catch (error) {
        throw new Error("Failed to update tasks to breached status: " + error.message);
      }
    }
    //update  task to overdue



    async function updateTasksToOverdue() {
      try {
        const currentTime = new Date();
        const updatedTasks = await Task.find({
          status: { $nin: ["completed", "overdued"] }, // Status is not "completed"
          endDate: { $lt: currentTime }, // endDate is less than the current time
        }).lean();

        console.log(
          `Found ${updatedTasks.length} tasks to update to "overdued" status.`
        );

        // Update the tasks to "breached" status
        const updatedTaskIds = updatedTasks.map((task) => task._id);

        await Task.updateMany(
          { _id: { $in: updatedTaskIds } },
          { $set: { status: "overdued" } } // Set breached to true
        ).exec();

        console.log(`Updated ${updatedTaskIds.length} tasks to "overdued" status.`);
      } catch (error) {
        throw new Error("Failed to update tasks overdued status: " + error.message);
      }
    }






    // Usage
    updatePendingTasksToStarted();
    updateTasksToOverdue()
    updateTasksToBreached()
  });
}

module.exports = scheduleCronJob;
