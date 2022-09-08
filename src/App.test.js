import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test if login page is rendered successfully", () => {
  render(<App />);
  const linkElement = screen.getByText(
    "See what’s happening in the world right now"
  );
  expect(linkElement).toBeInTheDocument();
});
