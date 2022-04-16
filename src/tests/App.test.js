import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  xtest("renders title", () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<App />);
    const linkElement = screen.getByText(/Surreal Estate/i);
    expect(linkElement).toBeInTheDocument();
  });
});
