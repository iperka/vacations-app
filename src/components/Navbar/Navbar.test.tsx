import { render, screen } from "@testing-library/react";
import Navbar from ".";
import { classNames } from "./Navbar";

describe("components/Navbar", () => {
  it("should render navigation items", () => {
    render(<Navbar />);
    expect(screen.getByText(/Dashboard/)).toBeInTheDocument();
    expect(screen.getByText(/Team/)).toBeInTheDocument();
    expect(screen.getByText(/Projects/)).toBeInTheDocument();
    expect(screen.getByText(/Calendar/)).toBeInTheDocument();
  });

  it("should combine classes", () => {
    expect(classNames("test", "test2")).toEqual("test test2");
  });

  it("should show correct icon", () => {
    render(<Navbar defaultOpen={true} />);
    expect(screen.getByTestId("xicon")).toBeInTheDocument();

    render(<Navbar />);
    expect(screen.getByTestId("menuIcon")).toBeInTheDocument();

    render(<Navbar defaultOpen={false} />);
    expect(screen.getByTestId("xicon")).toBeInTheDocument();
  });
});
