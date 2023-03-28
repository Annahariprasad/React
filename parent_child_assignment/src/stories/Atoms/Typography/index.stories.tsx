import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "./index";

export default {
  title: "Atoms/Text",
  Component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Title: ComponentStory<typeof Text> = Template.bind({});

Title.args = {
  vari: "h4",
  content: "Candidate Information",
  color: "secondary",
};

export const Label: ComponentStory<typeof Text> = Template.bind({});

Label.args = {
  vari: "subtitle1",
  content: "Name",
  color: "primary",
};

export const Data: ComponentStory<typeof Text> = Template.bind({});

Data.args = {
  vari: "subtitle2",
  content: "John Smith",
  color: "secondary",
};
