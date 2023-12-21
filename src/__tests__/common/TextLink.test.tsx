import TextLink from "@/components/common/TextLink";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("GitHubリンクのテスト", () => {
  const props = {
    color: "black",
    linkUrl: "https://link-no-test.com",
    text: "リンク",
  };

  it("TextLinkが指定したテキストで存在するか", () => {
    render(<TextLink {...props} />);
    const element = screen.getByText("リンク");

    expect(element).toBeInTheDocument();
  });

  it("TextLinkが指定したテキストで存在しないか", () => {
    render(<TextLink {...props} />);

    expect(screen.queryByText("リン")).not.toBeInTheDocument();
  });

  it("指定したURLが設定されていること", () => {
    render(<TextLink {...props} />);
    const element = screen.getByText("リンク");

    expect(element).toHaveAttribute("href", "https://link-no-test.com");
  });

  it("指定したURL以外が設定されていないこと", () => {
    render(<TextLink {...props} />);
    const element = screen.getByText("リンク");

    expect(element).not.toHaveAttribute("href", "https://link-no-testcom");
  });
});
