import { Meta, StoryObj } from "@storybook/react";
import "../assets/css/MainSection.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const meta = {
  title: "Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const storyFooter: Story = {};
