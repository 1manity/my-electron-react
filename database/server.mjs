import express from "express";
import path from "path";
import taskRouter from "./api/task.mjs";
import cors from "cors";
import "./database.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
// Serve static files from the dist directory
app.use(express.static(path.join(process.env.APP_ROOT || "", "dist")));

app.use("/api/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("欢迎使用Express在Electron中构建后端！");
});

app.listen(PORT, () => {
  console.log(`Express服务器正在运行，访问 http://localhost:${PORT}`);
});
