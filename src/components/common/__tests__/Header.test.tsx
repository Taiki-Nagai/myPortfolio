import Header from "@/components/common/Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Headerのテスト", () => {
  it("Headerが表示されること", () => {
    render(<Header />);
    const element = screen.getByText("Portfolio");

    expect(element).toBeInTheDocument();
  });

  describe("GithubLinkのテスト", () => {
    it("GithubLinkが表示されること", () => {
      render(<Header />);
      const element = screen.getByText("GitHub");

      expect(element).toBeInTheDocument();
    });

    it("正しいGitHubLinkが設定されていること", () => {
      render(<Header />);
      const element = screen.getByText("GitHub");

      expect(element).toHaveAttribute(
        "href",
        "https://github.com/Taiki-Nagai?tab=repositories"
      );
    });
  });

  describe("QiitaLinkのテスト", () => {
    it("QiitaLinkが表示されること", () => {
      render(<Header />);
      const element = screen.getByText("Qiita");

      expect(element).toBeInTheDocument();
    });

    it("正しいQiitaのLinkが設定されていること", () => {
      render(<Header />);
      const element = screen.getByText("Qiita");

      expect(element).toHaveAttribute("href", "https://qiita.com/taikiti");
    });
  });
});
