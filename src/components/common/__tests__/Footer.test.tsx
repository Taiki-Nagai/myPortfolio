import Footer from "@/components/common/Footer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Footerのテスト", () => {
  it("Footerが表示されること", () => {
    render(<Footer />);
    const element = screen.getByText("Nagai's portfolio");

    expect(element).toBeInTheDocument();
  });
  it("Galleryが表示されること", () => {
    render(<Footer />);
    const element = screen.getByText("Gallery");

    expect(element).toBeInTheDocument();
  });

  describe("GithubLinkのテスト", () => {
    it("GithubLinkが表示されること", () => {
      render(<Footer />);
      const element = screen.getByText("GitHub");

      expect(element).toBeInTheDocument();
    });

    it("正しいGitHubLinkが設定されていること", () => {
      render(<Footer />);
      const element = screen.getByText("GitHub");

      expect(element).toHaveAttribute(
        "href",
        "https://github.com/Taiki-Nagai?tab=repositories"
      );
    });
  });

  describe("QiitaLinkのテスト", () => {
    it("QiitaLinkが表示されること", () => {
      render(<Footer />);
      const element = screen.getByText("Qiita");

      expect(element).toBeInTheDocument();
    });

    it("正しいQiitaのLinkが設定されていること", () => {
      render(<Footer />);
      const element = screen.getByText("Qiita");

      expect(element).toHaveAttribute("href", "https://qiita.com/taikiti");
    });
  });
});
