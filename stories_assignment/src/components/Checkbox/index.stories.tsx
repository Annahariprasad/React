import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import MyCheckBox from "./index";

const useStyle = {
  BoxStyle: {
    height: "18px",
    width: "18px",
    backgrounColor: "#E5E7ED",
    "&.Mui-checked": {
      color: "#224DFF",
    },
  },
};

export default {
  title: "Checkbox",
  component: MyCheckBox,
} as ComponentMeta<typeof MyCheckBox>;

const Template: ComponentStory<typeof MyCheckBox> = (args) => (
  <MyCheckBox {...args} />
);

export const Default: ComponentStory<typeof MyCheckBox> = Template.bind({});
Default.args = {
  stx: {
    ...useStyle.BoxStyle,
  },
};
