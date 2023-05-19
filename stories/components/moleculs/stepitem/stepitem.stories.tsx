import { Meta } from "@storybook/react";
import StepItem, { IconProps } from "../../../../components/moleculs/StepItem";

export default {
  title: "Components/Moleculs/StepItem",
  component: StepItem,
} as Meta;

const Template = (arg: IconProps) => <StepItem {...arg} />;

export const Default = Template.bind({});
Default.arg = {
  icon: "/icon/stepOne.svg",
  title: "1. Start",
  deskripsi: "Pilih salah satu game yang ingin kamu top up",
};
