import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import MyTextField from "./index";

const useStyle = {
  FieldStyle: {
    height: "36px",
    width: "384px",
    borderRadius: "6px",
    padding: "8px 16px 8px 16px",
  },
};

export default {
  title: "Text Field",
  component: MyTextField,
} as ComponentMeta<typeof MyTextField>;

const Template: ComponentStory<typeof MyTextField> = (args) => (
  <MyTextField {...args} />
);

export const Email: ComponentStory<typeof MyTextField> = Template.bind({});
Email.args = {
  typeField: "outlined",
  typ: "email",
  plhr: "abc@gmail.com",
  stx: {
    ...useStyle.FieldStyle,
  },
};

export const Password: ComponentStory<typeof MyTextField> = Template.bind({});
Password.args = {
  typeField: "outlined",
  typ: "password",
  plhr: "********",
  stx: {
    ...useStyle.FieldStyle,
  },
};

export const ConfirmPassword: ComponentStory<typeof MyTextField> =
  Template.bind({});
ConfirmPassword.args = {
  typeField: "outlined",
  typ: "password",
  plhr: "********",
  stx: {
    ...useStyle.FieldStyle,
  },
};
