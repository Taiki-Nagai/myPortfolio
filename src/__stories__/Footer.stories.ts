import Footer from "@/components/Footer";
import { Meta, StoryObj } from "@storybook/react";
import "../assets/css/Footer.css";

const meta = {
  title: "Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryFooter: Story = { args: { footerMenu: "" } };
