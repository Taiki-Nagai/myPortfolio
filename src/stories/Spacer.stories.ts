import { Meta, StoryObj } from "@storybook/react";
import "../assets/css/MainSection.css";
import Spacer from "../components/Spacer";

const meta = {
  title: "Spacer",
  component: Spacer,
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StorySpacer: Story = { args: { size: 20 } };
