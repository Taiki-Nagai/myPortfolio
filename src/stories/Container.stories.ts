import { Meta, StoryObj } from "@storybook/react";
import "../assets/css/MainSection.css";
import Container from "../components/Container";

const meta = {
  title: "Container",
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const storyContainer: Story = { args: { children: "サンプル" } };
