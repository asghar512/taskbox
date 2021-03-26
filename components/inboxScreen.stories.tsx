import React from "react";
import { Provider } from "react-redux";
import { store } from "../lib/redux";
import InboxScreen from "./inboxScreen";
import { Meta } from "@storybook/react/types-6-0";

import * as TaskListStories from "./taskList.stories";
export default {
  component: InboxScreen,
  title: "inbox screen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta;

const Template = (args: any) => <InboxScreen />;

export const Default: any = Template.bind({});
