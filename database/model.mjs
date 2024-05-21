import mongoose, { Schema, Document } from "mongoose";

// 创建任务模式
const taskSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String, required: true },
  priority: { type: Number, default: 0 },
  deadline: { type: Date, required: true },
  completed: { type: Boolean, default: false },
});

// 创建任务模型
const TaskModel = mongoose.model("Task", taskSchema);

export { TaskModel };
