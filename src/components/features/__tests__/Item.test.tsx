import Item, { ItemProps } from "@/components/features/Item";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Itemのテスト", () => {
  const itemData: ItemProps = {
    img: "img1",
    siteUrl: "https://test",
    siteName: "site1",
    usedLanguage: "HTML、CSS、SASS、jQuery",
    productionTime: "10〜14日",
    summary: "テキストテキストテキストテキスト",
  };

  describe("Itemが表示されること", () => {
    //TODO:imgのテストを追加する
    //TODO:siteUrlのテストを追加する

    it("siteNameが表示されること", () => {
      render(<Item {...itemData} />);
      const element = screen.getByText("site1");

      expect(element).toBeInTheDocument();
    });

    it("usedLanguageが表示されること", () => {
      render(<Item {...itemData} />);
      const element = screen.getByText("HTML、CSS、SASS、jQuery");

      expect(element).toBeInTheDocument();
    });
    it("productionTimeが表示されること", () => {
      render(<Item {...itemData} />);
      const element = screen.getByText("10〜14日");

      expect(element).toBeInTheDocument();
    });

    it("summaryが表示されること", () => {
      render(<Item {...itemData} />);
      const element = screen.getByText("テキストテキストテキストテキスト");

      expect(element).toBeInTheDocument();
    });
  });
});
