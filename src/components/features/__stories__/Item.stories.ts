import { Meta, StoryObj } from "@storybook/react";
import "../../../assets/css/MainSection.css";
import img1 from "../../../assets/img/img1.png";
import Item from "../Item";

const meta = {
  title: "Item",
  component: Item,
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryItem: Story = {
  args: {
    img: img1,
    siteUrl: "#",
    siteName: "site1",
    usedLanguage: "HTML、CSS、SASS、jQuery",
    productionTime: "10〜14日",
    summary: "テキストテキストテキストテキスト",
  },
};
