import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Tests in <MultipleCustomHooks /> component", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should show default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("...Loading..."));
    expect(screen.getByText("Get next quote"));
    expect(screen.getByTestId("nextQuote").disabled).toBeTruthy();
  });

  it("should show a Quote", () => {
    const QUOTES = [{ author: "Davoles", quote: "Hey Apple" }];
    useFetch.mockReturnValue({
      data: QUOTES,
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText(QUOTES[0].quote));
    expect(screen.getByText("Get next quote"));
    expect(screen.getByTestId("nextQuote").disabled).toBeFalsy();
  });

  it("should call to increment function on btn click", () => {
    const QUOTES = [{ author: "Davoles", quote: "Hey Apple" }];
    useFetch.mockReturnValue({
      data: QUOTES,
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByTestId("nextQuote");
    fireEvent.click(nextButton);

    const { increment } = useCounter({});
    expect(increment).toHaveBeenCalled();

    fireEvent.click(nextButton);

    expect(increment).toHaveBeenCalledTimes(2);
  });
});
