import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonDemo from "../ButtonDemo";

test("renders buttons correctly", () => {
  render(<ButtonDemo />);
  expect(screen.getByText("Primary Button")).toBeInTheDocument();
  expect(screen.getByText("Secondary Button")).toBeInTheDocument();
});
