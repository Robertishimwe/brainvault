import Task from "../../models/task";

async function getPendingTasksWithPastStartDate() {
  try {
    const currentTime = new Date();
    const pendingTasks = await Task.find({
      status: "pending",
      startDate: { $lt: currentTime },
    }).exec();
console.log("testttttttttttt", pendingTasks)
    // return pendingTasks;
  } catch (error) {
    throw new Error("Failed to retrieve pending tasks: " + error.message);
  }
}

export default {getPendingTasksWithPastStartDate}
// Usage
