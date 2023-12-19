import { Meta, StoryObj } from "@storybook/react";
import MainSection from "../components/MainSection";
import "../assets/css/MainSection.css";

const meta = {
  title: "MainSection",
  component: MainSection,
} satisfies Meta<typeof MainSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const storyMainSection: Story = {
  
};
