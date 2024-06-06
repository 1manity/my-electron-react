import { useEffect, useState } from "react";
import { createTask, fetchTasks } from "../api/task";

export function Home() {
  useEffect(() => {
    // const date = new Date();
    // createTask({
    //   name: "1",
    //   description: "test",
    //   type: "test",
    //   priority: 1,
    //   deadline: date,
    //   completed: false,
    // })
    fetchTasks()
      .then((res) => console.log(res))
      .catch((error) => console.error("创建任务失败:", error));
  }, []);
  return <div>Home</div>;
}
