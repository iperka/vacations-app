import { render, screen } from "@testing-library/react";
import Banner from ".";

describe("components/Banner", () => {
  it("should render text", () => {
    render(<Banner variant="amber">Hello world!</Banner>);
    expect(screen.getByText(/Hello world!/)).toBeInTheDocument();
  });

  it("should close on click", () => {
    render(<Banner variant="amber">Hello world!</Banner>);
    expect(screen.getByTestId("banner")).toBeVisible();
    expect(screen.getByTestId("banner").classList.contains("hidden")).toBeFalsy();
    screen.getByTestId("btnClose").click();
    expect(screen.getByTestId("banner").classList.contains("hidden")).toBeTruthy();
  });
});
