import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalDemo from "../ModalDemo";

test("opens and closes modal", async () => {
  render(<ModalDemo />);

  const openButton = screen.getByText("Open Modal");
  userEvent.click(openButton);

  expect(
    await screen.findByText("This is a Modal for Amirhesam")
  ).toBeInTheDocument();

  const closeButton = screen.getByText("Close");
  userEvent.click(closeButton);

  await waitFor(() =>
    expect(
      screen.queryByText("This is a Modal for Amirhesam")
    ).not.toBeInTheDocument()
  );
});
