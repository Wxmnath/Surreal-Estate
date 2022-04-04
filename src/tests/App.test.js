import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  test("renders title", () => {
    render(<App />);
    const linkElement = screen.getByText(/Surreal Estate/i);
    expect(linkElement).toBeInTheDocument();
  });
});
