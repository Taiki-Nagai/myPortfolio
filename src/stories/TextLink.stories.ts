import { Meta, StoryObj } from "@storybook/react";
import "../assets/css/MainSection.css";
import TextLink from "../components/TextLink";

const meta = {
  title: "TextLink",
  component: TextLink,
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryTextLink: Story = {
  args: { color: "black", linkUrl: "", text: "テスト" },
};
