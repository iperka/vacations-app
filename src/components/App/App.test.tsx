import { render, screen } from "@testing-library/react";
import App from ".";

describe("components/App", () => {
  it("should render text", () => {
    render(<App />);
    expect(screen.getByText(/Hello world!/)).toBeInTheDocument();
  });
});
