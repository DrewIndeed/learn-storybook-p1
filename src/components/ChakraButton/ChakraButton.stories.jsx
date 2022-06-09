import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";
import React from "react";

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Succes = () => (
  <Button onClick={action("Click success")} colorScheme="green">
    Success
  </Button>
);
export const Danger = () => (
  <Button {...actions("onClick", "onMouseOver")} colorScheme="red">
    Danger
  </Button>
);
// after declaring the stories and run storybook it will give errors
// because you need to provide the theme

export const Log = () => (
  <Button colorScheme="teal" onClick={() => console.log("Log Me Clicked")}>
    Log Me
  </Button>
);

export const Knobs = () => (
  <Button disabled={boolean("Disable", false)}>
    {text("The Prop Name", "The Initial Value")}
  </Button>
);
