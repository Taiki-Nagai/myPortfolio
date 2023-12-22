import Container from "@/components/common/Container";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Containerのテスト", () => {
  it("Containerが表示されること", () => {
    const container = <p>コンテナ</p>;

    render(<Container>{container}</Container>);
    const element = screen.getByText("コンテナ");

    expect(element).toBeInTheDocument();
  });
});
