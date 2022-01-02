import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from ".";
import { classNames } from "./Navbar";

describe("components/Navbar", () => {
  it("should render navigation items", () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText(/Dashboard/)).toBeInTheDocument();
  });

  it("should combine classes", () => {
    expect(classNames("test", "test2")).toEqual("test test2");
  });
});
