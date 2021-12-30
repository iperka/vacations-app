import { render, screen } from "@testing-library/react";
import App from ".";

describe("components/App", () => {
  it("should render text", () => {
    render(<App />);
    expect(screen.getByText(/Hello world!/)).toBeInTheDocument();
  });

  // it("should render development banner if NODE_ENV is development", () => {
  //   jest.resetModules();
  //   process.env = Object.assign(process.env, {
  //     NODE_ENV: "development",
  //   });
  //   render(<App />);
  //   expect(screen.getByText(/Development/)).toBeInTheDocument();
  // });
});
