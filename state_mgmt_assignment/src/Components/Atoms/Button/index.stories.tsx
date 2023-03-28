import { ComponentMeta, ComponentStory } from "@storybook/react";
import Btn from "./index";
// import theme from "../../../theme";

export default {
  title: "Atoms/Button",
  component: Btn,
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = (args) => <Btn {...args} />;

export const PreAdverse: ComponentStory<typeof Btn> = Template.bind({});
PreAdverse.args = {
  cnt: "Pre-Adverse Action",
};
