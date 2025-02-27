import { render, screen } from "@testing-library/react";
import DataTableDemo from "../DataTableDemo";

test("renders data table with correct columns and rows", async () => {
  render(<DataTableDemo />);

  // ✅ Check column headers
  expect(screen.getByRole("columnheader", { name: "ID" })).toBeInTheDocument();
  expect(
    screen.getByRole("columnheader", { name: "Name" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("columnheader", { name: "Email" })
  ).toBeInTheDocument();

  // ✅ Check if rows exist
  expect(screen.getByRole("row", { name: /Alice/i })).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /Bob/i })).toBeInTheDocument();
  expect(screen.getByRole("row", { name: /Charlie/i })).toBeInTheDocument();
});
