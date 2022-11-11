import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import Input from "./input";

describe("input field component works properly", () => {
  it("accepts regular inputs without setting any attributes", async () => {
    render(
      <form data-testid="form">
        <label htmlFor="test">Test</label>
        <Input id="test" data-testid="input" />
      </form>
    );
    const form = screen.getByTestId("form");
    const inputfield = screen.getByLabelText("Test");
    await userEvent.type(inputfield, "test");
    expect(inputfield).toBeInTheDocument();
    expect(form).toBeValid();
  });

  it("type attribute working", async () => {
    render(
      <form data-testid="form">
        <label htmlFor="test">Test</label>
        <Input id="test" type="number" />
      </form>
    );
    const form = screen.getByTestId("form");
    const inputfield = screen.getByLabelText("Test");
    expect(inputfield).toBeInTheDocument();
    expect(inputfield).toHaveAttribute("type", "number");
  });

  it("min value working", async () => {
    render(
      <form data-testid="form">
        <label htmlFor="test">Test</label>
        <Input id="test" type="number" min="0" />
      </form>
    );
    const form = screen.getByTestId("form");
    const inputfield = screen.getByLabelText("Test");
    await userEvent.type(inputfield, "-6");
    expect(inputfield).toBeInTheDocument();
    expect(form).not.toBeValid();
  });

  it("max value working", async () => {
    render(
      <form data-testid="form">
        <label htmlFor="test">Test</label>
        <Input id="test" type="number" max="100" />
      </form>
    );
    const form = screen.getByTestId("form");
    const inputfield = screen.getByLabelText("Test");
    await userEvent.type(inputfield, "101");
    expect(inputfield).toBeInTheDocument();
    expect(form).not.toBeValid();
  });

  it("pattern attribute working", async () => {
    render(
      <form data-testid="form">
        <label htmlFor="test">Test</label>
        <Input id="test" pattern=".*[^\s]{1,}.*" />
      </form>
    );
    const form = screen.getByTestId("form");
    const inputfield = screen.getByLabelText("Test");
    await userEvent.type(inputfield, " ");
    expect(inputfield).toBeInTheDocument();
    expect(form).not.toBeValid();
  });
});
