import Task from "../../models/task";

const createTask = async (taskData) => {
    try {
      const task = new Task(taskData);
      return await task.save();
    } catch (error) {
      throw new Error("Failed to create a task: " + error.message);
    }
  };
  
  // Get a task by ID
  const getTaskById = async (taskId) => {
    try {
      return await Task.findById(taskId);
    } catch (error) {
      throw new Error("Failed to get task by ID: " + error.message);
    }
  };
  
  // Update a task by ID
  const updateTask = async (taskId, updateData) => {
    try {
      return await Task.findByIdAndUpdate(taskId, updateData, { new: true });
    } catch (error) {
      throw new Error("Failed to update task: " + error.message);
    }
  };
  
  // Delete a task by ID
  const deleteTask = async (taskId) => {
    try {
      await Task.findByIdAndDelete(taskId);
    } catch (error) {
      throw new Error("Failed to delete task: " + error.message);
    }
  };
  
  // Get all tasks for a user
  const getTasksForUser = async (userId) => {
    try {
      return await Task.find({ user: userId });
    } catch (error) {
      throw new Error("Failed to get tasks for user: " + error.message);
    }
  };
  
  export {
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
    getTasksForUser,
  };