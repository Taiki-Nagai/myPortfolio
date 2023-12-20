import GithubLink from "@/components/features/GithubLink";
import { Meta, StoryObj } from "@storybook/react";
import "../../assets/css/MainSection.css";

const meta = {
  title: "GithubLink",
  component: GithubLink,
} satisfies Meta<typeof GithubLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryGithubLink: Story = { args: { color: "black" } };
