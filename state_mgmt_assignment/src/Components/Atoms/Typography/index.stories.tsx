import Text from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../../theme";

export default {
  title: "Atoms/Typography",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Title: ComponentStory<typeof Text> = Template.bind({});
Title.args = {
  model: "h1",
  content: "Candidates",
  col: theme.palette.primary.main,
};

export const Subtitle1: ComponentStory<typeof Text> = Template.bind({});
Subtitle1.args = {
  model: "subtitle1",
  content: "Candidate Information",
  col: theme.palette.primary.main,
};

export const Caption: ComponentStory<typeof Text> = Template.bind({});
Caption.args = {
  model: "caption",
  content: "NAME",
  col: theme.palette.secondary.main,
};
