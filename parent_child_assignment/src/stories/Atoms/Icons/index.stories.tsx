import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "./index";
import Icons from "../../../Components/Atoms/Icons/index";

export default {
  title: "Atoms/Icons",
  Component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Arrow: ComponentStory<typeof Icon> = Template.bind({});
Arrow.args = {
  picture: Icons.arrow,
  text: "Arrow_icon",
};

export const Person: ComponentStory<typeof Icon> = Template.bind({});
Person.args = {
  picture: Icons.person,
  text: "Person_icon",
};

export const Email: ComponentStory<typeof Icon> = Template.bind({});
Email.args = {
  picture: Icons.email,
  text: "Email_icon",
};

export const IdCard: ComponentStory<typeof Icon> = Template.bind({});
IdCard.args = {
  picture: Icons.idcard,
  text: "IdCard_icon",
};

export const Phone: ComponentStory<typeof Icon> = Template.bind({});
Phone.args = {
  picture: Icons.phone,
  text: "phone_icon",
};

export const Location: ComponentStory<typeof Icon> = Template.bind({});
Location.args = {
  picture: Icons.location,
  text: "Location_icon",
};

export const Shield: ComponentStory<typeof Icon> = Template.bind({});
Shield.args = {
  picture: Icons.shield,
  text: "Shield_icon",
};

export const Calender: ComponentStory<typeof Icon> = Template.bind({});
Calender.args = {
  picture: Icons.calender,
  text: "Calender_icon",
};
