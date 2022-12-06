import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe("Tests in <MultipleCustomHooks /> component", () => {
  it("should show default component", () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText("...Loading..."));
    expect(screen.getByText("Get next quote"));
    expect(screen.getByTestId("nextQuote").disabled).toBeTruthy();
    screen.debug();
  });
});
