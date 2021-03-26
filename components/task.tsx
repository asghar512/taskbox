import React from "react";
//interface
import { TaskInterface } from "../interfaces/task.interface";

interface props {
  task: TaskInterface;
  onArchiveTask?: (id: string) => void;
  onPinTask?: (id: string) => void;
  onUnPinTask?: (id: string) => void;
}

const Task: React.FC<props> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
  onUnPinTask,
}) => {
  const [isChecked, setIsChecked] = React.useState<boolean>();

  console.log(isChecked);
  return (
    <div
      className={`list-item ${state} py-2 my-1 px-2 flex justify-between relative rounded ${
        state === "Data ARCHIVED" ? "bg-gray-100" : "bg-white"
      }`}
    >
      {state === "Data ARCHIVED" && (
        <div
          className="absolute w-full  -ml-2 mt-3  bg-gray-400"
          style={{ height: "3px" }}
        ></div>
      )}
      <div>
        <label className="checkbox">
          <input
            type="checkbox"
            defaultChecked={state === "TASK_PINNED"}
            disabled={state === "Data ARCHIVED" ? true : false}
            name="checked"
            className="cursor-pointer"
            onClick={(e) => {
              state !== "Data ARCHIVED" && !isChecked
                ? !!onPinTask && onPinTask(id)
                : !!onUnPinTask && onUnPinTask(id);
              setIsChecked(!isChecked);
            }}
          />
        </label>
        <div className="title inline">
          <h1 className="inline px-3">{title}</h1>
        </div>
      </div>

      {/* <div
        className="actions"
        onClick={(event) => event.stopPropagation()}
      ></div> */}
      {state !== "Data ARCHIVED" ? (
        <span
          className="text-blue-400 hover:text-blue-500 cursor-pointer relative mr-0 right-0 "
          onClick={() =>
            state !== "Data ARCHIVED" && !!onArchiveTask && onArchiveTask(id)
          }
        >
          archive
        </span>
      ) : (
        "archived"
      )}
      {/* {state !== "Data ARCHIVED" && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={() => !!onPinTask && onPinTask(id)}>
          <span>pin</span>
        </a>
      )} */}
    </div>
  );
};

export default Task;
