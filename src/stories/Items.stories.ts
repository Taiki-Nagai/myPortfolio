import { Meta, StoryObj } from "@storybook/react";
import "../assets/css/MainSection.css";
import img1 from "../assets/img/img1.png";
import Items from "../components/Items";

const meta = {
  title: "Items",
  component: Items,
} satisfies Meta<typeof Items>;

export default meta;
type Story = StoryObj<typeof meta>;

export const storyItem: Story = {
  args: {
    items: [
      {
        img: img1,
        siteUrl: "#",
        siteName: "site1",
        usedLanguage: "HTML、CSS、SASS、jQuery",
        productionTime: "10〜14日",
        summary: "テキストテキストテキストテキスト",
      },
      {
        img: img1,
        siteUrl: "#",
        siteName: "site1",
        usedLanguage: "HTML、CSS、SASS、jQuery",
        productionTime: "10〜14日",
        summary: "テキストテキストテキストテキスト",
      },
      {
        img: img1,
        siteUrl: "#",
        siteName: "site1",
        usedLanguage: "HTML、CSS、SASS、jQuery",
        productionTime: "10〜14日",
        summary: "テキストテキストテキストテキスト",
      },
      {
        img: img1,
        siteUrl: "#",
        siteName: "site1",
        usedLanguage: "HTML、CSS、SASS、jQuery",
        productionTime: "10〜14日",
        summary: "テキストテキストテキストテキスト",
      },
      {
        img: img1,
        siteUrl: "#",
        siteName: "site1",
        usedLanguage: "HTML、CSS、SASS、jQuery",
        productionTime: "10〜14日",
        summary: "テキストテキストテキストテキスト",
      },
    ],
  },
};
