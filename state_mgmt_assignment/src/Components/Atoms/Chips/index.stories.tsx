import Status from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Chips",
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Clear: ComponentStory<typeof Status> = Template.bind({});
Clear.args = {
  label: "CLEAR",
  //theme.palette.success.light,
};

export const Consider: ComponentStory<typeof Status> = Template.bind({});
Consider.args = {
  label: "CONSIDER",
  //theme.palette.warning.light,
};
