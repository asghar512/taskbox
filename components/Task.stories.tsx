import React from "react";
import Task from "./task";
import { TaskInterfaceProp } from "../interfaces/task.interface";

export default {
  component: Task,
  title: "Data",
};

const Template = (args: any) => <Task {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  task: {
    id: "1",
    title: "Data check",
    state: "Data Inbox",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned: any = Template.bind({});

Pinned.args = {
  task: {
    ...Default.args.task,
    state: "Pinned Data",
  },
};

export const Archived: any = Template.bind({});

Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
