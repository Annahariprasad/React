import CardBox from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icons from "../../../Components/Atoms/Icons/index";

export default {
  title: "Molecules/Cards",
  Component: CardBox,
} as ComponentMeta<typeof CardBox>;

const Template: ComponentStory<typeof CardBox> = (args) => (
  <CardBox {...args} />
);

export const Person: ComponentStory<typeof CardBox> = Template.bind({});

Person.args = {
  lbl: "Name",
  content: "John Smith",
  Element: Icons.person,
};

export const Email: ComponentStory<typeof CardBox> = Template.bind({});

Email.args = {
  lbl: "Email",
  content: "John.smith@checkr.com",
  Element: Icons.email,
};

export const Docs: ComponentStory<typeof CardBox> = Template.bind({});

Docs.args = {
  lbl: "Docs",
  content: "1990-09-10 (26)",
  Element: Icons.idcard,
};
