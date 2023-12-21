import QiitaLink from "@/components/features/QiitaLink";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Qiitaリンクのテスト", () => {
  const color = "black";

  it("QiitaLinkが存在するか", () => {
    render(<QiitaLink color={color} />);
    const element = screen.getByText("Qiita");

    expect(element).toBeInTheDocument();
  });

  it("正しいQiitaのLinkが設定されていること", () => {
    render(<QiitaLink color={color} />);
    const element = screen.getByText("Qiita");

    expect(element).toHaveAttribute("href", "https://qiita.com/taikiti");
  });
});
