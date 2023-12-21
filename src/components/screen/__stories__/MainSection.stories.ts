import { Meta, StoryObj } from "@storybook/react";
import "../../../assets/css/MainSection.css";
import MainSection from "../MainSection";

const meta = {
  title: "MainSection",
  component: MainSection,
} satisfies Meta<typeof MainSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryMainSection: Story = {};
