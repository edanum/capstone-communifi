import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SkipButton from "./skipButton";

test("Skip button", () => {
  render(<SkipButton />);
  const button = screen.getByRole("button");
  expect(button).toHaveAccessibleName("Skip (just for fishes)");
});
