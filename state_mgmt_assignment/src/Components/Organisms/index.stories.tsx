import React from "react";
import Card from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Organisms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => <Card />;

export const Search: ComponentStory<typeof Card> = Template.bind({});
