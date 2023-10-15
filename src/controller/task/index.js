import {
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  getTasksForUser,
} from "../../services/task"; // Import your business logic functions

class TaskController {
  static createTaskHandler = async (req, res) => {
    const userId = req.user
    const taskData ={...req.body, user:userId}
    try {
      const task = await createTask(taskData);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static getTaskByIdHandler = async (req, res) => {
    try {
      const task = await getTaskById(req.params.taskId);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static updateTaskHandler = async (req, res) => {
    try {
      const task = await updateTask(req.params.taskId, req.body);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static deleteTaskHandler = async (req, res) => {
    try {
      await deleteTask(req.params.taskId);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static getTasksForUserHandler = async (req, res) => {
    try {
      const tasks = await getTasksForUser(req.params.userId);
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default TaskController;
