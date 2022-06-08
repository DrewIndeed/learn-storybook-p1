import React from "react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: { control: "text" },
    label: { control: "text" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  label: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = { variant: "secondary", label: "secondary" };

export const Success = Template.bind({});
Success.args = { variant: "success", label: "success" };

export const Danger = Template.bind({});
Danger.args = { variant: "danger", label: "danger" };
