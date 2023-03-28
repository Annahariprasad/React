import { ComponentMeta, ComponentStory } from "@storybook/react";
import TableElement from "./index";
// import theme from "../../../theme";

export default {
  title: "Molecules/Table",
  component: TableElement,
} as ComponentMeta<typeof TableElement>;

const Template: ComponentStory<typeof TableElement> = (args) => (
  <TableElement {...args} />
);

export const Default: ComponentStory<typeof TableElement> = Template.bind({});
Default.args = {
  first: "John Smith",
  second: "-",
  third: "CLEAR",
  fourth: "Barrouallie",
  fifth: "2/22/2022",
};
