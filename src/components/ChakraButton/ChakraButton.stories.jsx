import { Button } from "@chakra-ui/react";
import React from "react";

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Succes = () => <Button colorScheme="green">Success</Button>;
export const Danger = () => <Button colorScheme="red">Danger</Button>;
// after declaring the stories and run storybook it will give errors
// because you need to provide the theme
