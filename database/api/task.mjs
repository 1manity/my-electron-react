import express from "express";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../service/taskService.mjs";

const taskRouter = express.Router();

// 创建任务
taskRouter.post("/", async (req, res) => {
  try {
    const taskData = req.body;
    const task = await createTask(taskData);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 获取所有任务
taskRouter.get("/", async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 获取单个任务
taskRouter.get("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await getTaskById(taskId);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 更新任务
taskRouter.put("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const updateData = req.body;
    const updatedTask = await updateTask(taskId, updateData);
    if (updatedTask) {
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 删除任务
taskRouter.delete("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    await deleteTask(taskId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default taskRouter;
