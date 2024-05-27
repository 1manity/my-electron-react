import { Document } from "mongoose";

interface Task extends Document {
  name: string;
  description?: string;
  type: string;
  priority: number;
  deadline: Date;
  completed: boolean;
}

export default Task;
