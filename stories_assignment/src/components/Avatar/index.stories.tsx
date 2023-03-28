import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import MyAvatar from "./index";

const useStyle = {
  AvStyle: {
    height: "36px",
    width: "36px",
    backgroundColor: "#C4C4C4",
  },
};

export default {
  title: "Avatar",
  component: MyAvatar,
} as ComponentMeta<typeof MyAvatar>;

const Template: ComponentStory<typeof MyAvatar> = (args) => (
  <MyAvatar {...args} />
);

export const Default: ComponentStory<typeof MyAvatar> = Template.bind({});
Default.args = {
  alt: "image",
  src: "https://s3-alpha-sig.figma.com/img/e471/5a45/712dd1ca82591ad52dcfa8f03dfdd1ab?Expires=1680480000&Signature=AoH2c~Ta7V5j0Eo7yKaO3FUYgZ4vAddjpafyo1l1lP-wUykt3rbU-2M8Q6jUARmS2oSEENAOeu7VFC09s5eS0xKnCKruQ9IoPhDXjr3zCFERjO0hJitbkqJJd4Iez8OLndLLrQ3bsubicRs~h4P54zGfgseh3PFcPNyU882j71oUIeYn4suU5EG4MPeXZo7Bcl~ShvPFXIj0cCcw1a7zrLWBmAxKyTajo0jf4FqG5ZzgKxshxGhGHnr1twaOj56JDatyX0bx76i-B50GX9ETFtcgHZnxv9njA5NR1KW0YlkEwCKxizBxCJQxFo2Hi~NX34YsYsYsp9GDo-GBsndmNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  stx: {
    ...useStyle.AvStyle,
  },
};
