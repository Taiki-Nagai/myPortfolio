import QiitaLink from "@/components/features/QiitaLink";
import { Meta, StoryObj } from "@storybook/react";
import "../../../assets/css/MainSection.css";

const meta = {
  title: "QiitaLink",
  component: QiitaLink,
} satisfies Meta<typeof QiitaLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryQiitaLink: Story = { args: { color: "black" } };
