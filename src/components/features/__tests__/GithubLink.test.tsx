import GithubLink from "@/components/features/GithubLink";
import { act, render, screen } from "@testing-library/react";

describe("GitHubリンクのテスト", () => {
  it("テスト１", () => {
    act(() => {
      <GithubLink color="black" />;
    });
    render(<GithubLink color="black" />);
    const element = screen.getByText("GitHub");
    // expect(element).toBeInTheDocument();
  });
});
