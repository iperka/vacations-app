import { render, screen } from "@testing-library/react";
import DashboardPage from ".";

describe("pages/DashboardPage", () => {
  it("should render text", () => {
    render(<DashboardPage />);
    expect(screen.getByText(/Redirecting/)).toBeInTheDocument();
  });
});
