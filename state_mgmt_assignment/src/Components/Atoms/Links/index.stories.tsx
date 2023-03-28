import Name from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../../theme";

export default {
  title: "Atoms/Link",
  component: Name,
} as ComponentMeta<typeof Name>;

const Template: ComponentStory<typeof Name> = (args) => <Name {...args} />;

export const Body2: ComponentStory<typeof Name> = Template.bind({});
Body2.args = {
  cnt: "John Smith",
  col: theme.palette.primary.dark,
};
