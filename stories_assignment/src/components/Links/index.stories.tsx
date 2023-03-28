import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import MyLink from "./index";

const useStyle = {
  LinkStyle: {
    fontStyle: "normal",
    fontWeight: "500",
    height: "20px",
    lineHeight: "20px",
    color: "#224DFF",
    textDecoration: "none",
  },
};

export default {
  title: "Link",
  component: MyLink,
} as ComponentMeta<typeof MyLink>;

const Template: ComponentStory<typeof MyLink> = (args) => <MyLink {...args} />;

export const Forgot: ComponentStory<typeof MyLink> = Template.bind({});
Forgot.args = {
  content: "Forgot password?",
  stx: {
    ...useStyle.LinkStyle,
    width: "120px",
    fontFamily: "Inter",
    fontSize: "14px",
  },
};

export const Checkr: ComponentStory<typeof MyLink> = Template.bind({});
Checkr.args = {
  content: "Checkr",
  stx: {
    ...useStyle.LinkStyle,
    fontFamily: "Roboto",
    fontSize: "17px",
    width: "53px",
  },
};

export const PrivacyPolicy: ComponentStory<typeof MyLink> = Template.bind({});
PrivacyPolicy.args = {
  content: "Privacy Policy",
  stx: {
    ...useStyle.LinkStyle,
    width: "100px",
    fontFamily: "Inter",
    fontSize: "14px",
  },
};

export const SignUp: ComponentStory<typeof MyLink> = Template.bind({});
SignUp.args = {
  content: "Sign up",
  stx: {
    ...useStyle.LinkStyle,
    width: "90px",
    fontFamily: "Inter",
    fontSize: "14px",
  },
};

export const SignIn: ComponentStory<typeof MyLink> = Template.bind({});
SignIn.args = {
  content: "Sign in",
  stx: {
    ...useStyle.LinkStyle,
    width: "90px",
    fontFamily: "Inter",
    fontSize: "14px",
  },
};
