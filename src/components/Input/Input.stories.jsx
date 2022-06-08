import React from "react";
import Input from "./Input";

export default {
  title: "form/Input",
  component: Input,
};

export const Small = () => <Input size="small" placeholder="Small size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;

// this is to have a custom name on storybook server instead of the export name
Small.storyName = "Small Input";
