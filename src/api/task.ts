import { Document } from "mongoose";
import instance from "./axios";
interface Task {
  name: string;
  description?: string;
  type: string;
  priority: number;
  deadline: Date;
  completed: boolean;
}

// 添加一个新的任务
export function createTask(taskData: Task): Promise<Task> {
  return instance
    .post<Task>("/tasks", taskData)
    .then((response) => response.data);
}

// 获取所有任务
export function fetchTasks(): Promise<Task[]> {
  return instance.get<Task[]>("/tasks").then((response) => response.data);
}

// 获取单个任务
export function fetchTaskById(taskId: string): Promise<Task> {
  return instance
    .get<Task>(`/tasks/${taskId}`)
    .then((response) => response.data);
}

// 更新任务
export function updateTask(
  taskId: string,
  updateData: Partial<Task>
): Promise<Task> {
  return instance
    .put<Task>(`/tasks/${taskId}`, updateData)
    .then((response) => response.data);
}

// 删除任务
export function deleteTask(taskId: string): Promise<void> {
  return instance.delete<void>(`/tasks/${taskId}`).then(() => undefined);
}

// 标记任务为已完成
export function markTaskAsCompleted(taskId: string): Promise<Task> {
  return instance
    .patch<Task>(`/tasks/${taskId}`, { completed: true })
    .then((response) => response.data);
}

export default Task;
