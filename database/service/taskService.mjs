import { TaskModel } from "../model/task.mjs";

// 创建任务
export async function createTask(taskData) {
  try {
    console.log(taskData);
    const task = await TaskModel.create(taskData);
    return task;
  } catch (error) {
    throw new Error(`Error creating task: ${error.message}`);
  }
}

// 获取所有任务
export async function getAllTasks() {
  try {
    const tasks = await TaskModel.find();
    return tasks;
  } catch (error) {
    throw new Error(`Error fetching tasks: ${error.message}`);
  }
}

// 获取单个任务
export async function getTaskById(taskId) {
  try {
    const task = await TaskModel.findById(taskId);
    return task;
  } catch (error) {
    throw new Error(`Error fetching task by ID: ${error.message}`);
  }
}

// 更新任务
export async function updateTask(taskId, updateData) {
  try {
    const task = await TaskModel.findByIdAndUpdate(taskId, updateData, {
      new: true,
    });
    return task;
  } catch (error) {
    throw new Error(`Error updating task: ${error.message}`);
  }
}

// 删除任务
export async function deleteTask(taskId) {
  try {
    await TaskModel.findByIdAndDelete(taskId);
  } catch (error) {
    throw new Error(`Error deleting task: ${error.message}`);
  }
}
