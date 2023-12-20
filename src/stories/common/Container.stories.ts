import { Meta, StoryObj } from "@storybook/react";
import Container from "../../components/common/Container";
import "../assets/css/MainSection.css";

const meta = {
  title: "Container",
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryContainer: Story = { args: { children: "サンプル" } };
