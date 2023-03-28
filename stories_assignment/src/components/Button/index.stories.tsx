import React from "react";

import MyButton from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

const useStyle = {
  btnStyle: {
    height: "44px",
    width: "384px",
    borderRadius: "6px",
    backgroundColor: "#224DFF",
    color: "white",
    padding: "8px 16px 8px 16px",
    textTransform: "none",
  },
};

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args}></MyButton>
);

export const Sign_up: ComponentStory<typeof MyButton> = Template.bind({});

Sign_up.args = {
  typeButton: "contained",
  stx: {
    ...useStyle.btnStyle,
    backgroundColor: "#95AAFF",
  },
  content: "Sign up",
};

export const SignUp_AfterInput: ComponentStory<typeof MyButton> = Template.bind(
  {}
);

SignUp_AfterInput.args = {
  typeButton: "contained",
  stx: useStyle.btnStyle,
  content: "Sign up",
};

export const Sign_in: ComponentStory<typeof MyButton> = Template.bind({});

Sign_in.args = {
  typeButton: "contained",
  stx: {
    ...useStyle.btnStyle,
    backgroundColor: "#95AAFF",
  },
  content: "Sign in",
};

export const SignIn_AfterInput: ComponentStory<typeof MyButton> = Template.bind(
  {}
);

SignIn_AfterInput.args = {
  typeButton: "contained",
  stx: useStyle.btnStyle,
  content: "Sign in",
};

export const ResetPassword: ComponentStory<typeof MyButton> = Template.bind({});

ResetPassword.args = {
  typeButton: "contained",
  stx: {
    ...useStyle.btnStyle,
    backgroundColor: "#95AAFF",
  },
  content: "Reset password",
};

export const ResetPassword_AftInp: ComponentStory<typeof MyButton> =
  Template.bind({});

ResetPassword_AftInp.args = {
  typeButton: "contained",
  stx: useStyle.btnStyle,
  content: "Reset password",
};

export const Continue: ComponentStory<typeof MyButton> = Template.bind({});

Continue.args = {
  typeButton: "contained",
  stx: {
    ...useStyle.btnStyle,
    backgroundColor: "#95AAFF",
  },
  content: "Continue",
};

export const Continue_AftInp: ComponentStory<typeof MyButton> = Template.bind(
  {}
);

Continue_AftInp.args = {
  typeButton: "contained",
  stx: useStyle.btnStyle,
  content: "Continue",
};

export const ExportReport_1: ComponentStory<typeof MyButton> = Template.bind(
  {}
);

ExportReport_1.args = {
  typeButton: "contained",
  stx: {
    ...useStyle.btnStyle,
    height: "36px",
    width: "126px",
    backgroundColor: "#95AAFF",
  },
  content: "Export Report",
};

export const ExportReport_2: ComponentStory<typeof MyButton> = Template.bind(
  {}
);

ExportReport_2.args = {
  typeButton: "contained",
  stx: {
    ...ExportReport_1.args?.stx,
    backgroundColor: "#224DFF",
  },
  content: "Export Report",
};

export const PreAdverseAction: ComponentStory<typeof MyButton> = Template.bind(
  {}
);

PreAdverseAction.args = {
  typeButton: "outlined",
  stx: {
    ...useStyle.btnStyle,
    height: "36px",
    width: "164px",
    backgroundColor: "white",
    color: "#696A6E",
    border: "1px solid #E5E7ED",
  },
  content: "Pre-Adverse Action",
};

export const Engage: ComponentStory<typeof MyButton> = Template.bind({});

Engage.args = {
  typeButton: "contained",
  stx: {
    ...useStyle.btnStyle,
    height: "36px",
    width: "83px",
  },
  content: "Engage",
};

export const Cancel: ComponentStory<typeof MyButton> = Template.bind({});

Cancel.args = {
  typeButton: "outlined",
  stx: {
    ...useStyle.btnStyle,
    height: "36px",
    width: "79px",
    color: "#696A6E",
    border: "1px solid #E5E7ED",
    backgroundColor: "white",
  },
  content: "Cancel",
};

export const Logout: ComponentStory<typeof MyButton> = Template.bind({});

Logout.args = {
  typeButton: "contained",
  stx: {
    ...useStyle.btnStyle,
    height: "36px",
    width: "79px",
  },
  content: "Logout",
};

export const PreviewNotice_1: ComponentStory<typeof MyButton> = Template.bind(
  {}
);

PreviewNotice_1.args = {
  typeButton: "contained",
  stx: {
    ...useStyle.btnStyle,
    width: "133px",
    height: "36px",
    backgroundColor: "#95AAFF",
  },
  content: "Preview Notice",
};

export const PreviewNotice_2: ComponentStory<typeof MyButton> = Template.bind(
  {}
);

PreviewNotice_2.args = {
  typeButton: "contained",
  stx: {
    ...useStyle.btnStyle,
    width: "133px",
    height: "36px",
  },
  content: "Preview Notice",
};

export const SubmitNotice: ComponentStory<typeof MyButton> = Template.bind({});

SubmitNotice.args = {
  typeButton: "contained",
  stx: {
    ...useStyle.btnStyle,
    width: "127px",
    height: "36px",
  },
  content: "Submit Notice",
};
