import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

it("displays an error message", () => {
  const { getByText } = render(<Alert message="Error!" />);

  expect(getByText(/Error/).textContent).toBe("Error!");
});

it("displays a success message", () => {
  const { getByText } = render(<Alert message="Success!!!!" success />);
  expect(getByText(/Success/).textContent).toBe("Success!!!!");
});
it("does not render an error or a success message if message props is empty", () => {
  const { asFragment } = render(<Alert message="" />);
  const alert = asFragment();
  expect(alert).toMatchSnapshot();
});

it("renderds error message when there is an error", () => {
  const { asFragment } = render(<Alert message="error" />);
  const alert = asFragment();
  expect(alert).toMatchSnapshot();
});
it("renders success message when property has been created", () => {
  const { asFragment } = render(<Alert message="Property Added" />);
  const alert = asFragment();
  expect(alert).toMatchSnapshot();
});
