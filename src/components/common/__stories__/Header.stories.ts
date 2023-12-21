import { Meta, StoryObj } from "@storybook/react";
import "../../../assets/css/MainSection.css";
import Header from "../Header";

const meta = {
  title: "Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryHeader: Story = {};
