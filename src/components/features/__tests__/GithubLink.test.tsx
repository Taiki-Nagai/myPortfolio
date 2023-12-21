import GithubLink from "@/components/features/GithubLink";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("GitHubリンクのテスト", () => {
  it("GithubLinkが存在するか", () => {
    render(<GithubLink color="black" />);
    const element = screen.getByText("GitHub");

    expect(element).toBeInTheDocument();
  });

  it("正しいGitHubLinkが設定されていること", () => {
    render(<GithubLink color="black" />);
    const element = screen.getByText("GitHub");

    expect(element).toHaveAttribute(
      "href",
      "https://github.com/Taiki-Nagai?tab=repositories"
    );
  });
});
