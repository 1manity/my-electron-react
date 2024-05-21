import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(process.env.APP_ROOT || "", "dist")));

app.get("/", (req, res) => {
  res.send("欢迎使用Express在Electron中构建后端！");
});

app.listen(PORT, () => {
  console.log(`Express服务器正在运行，访问 http://localhost:${PORT}`);
});
