import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pinData, unpinData, archiveData } from "../lib/redux";
import { TaskInterface } from "../interfaces/task.interface";
//components
import AddTask from "./addTask";
import TaskList from "./taskList";

const InboxScreen = () => {
  const task = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(task);

  const onPinTask = (id: string) => {
    dispatch(pinData({ id: id }));
  };
  const onArchiveTask = (id: string) => {
    dispatch(archiveData({ id: id }));
  };
  const onUnPinTask = (id: string) => {
    dispatch(unpinData({ id: id }));
  };
  return (
    <div>
      <AddTask />
      <TaskList
        tasks={task as TaskInterface[]}
        onPinTask={onPinTask}
        onArchiveTask={onArchiveTask}
        onUnPinTask={onUnPinTask}
      />
    </div>
  );
};

export default InboxScreen;
