import { act, renderHook } from "@testing-library/react";

import { useForm } from "../../src/hooks";

describe("useForm tests", () => {
  const INITIAL_FORM = {
    name: "Davoles",
    email: "davo@les.com",
  };

  it.todo("should throw an error if no args");

  it("should return default values", () => {
    const { result } = renderHook(() => useForm(INITIAL_FORM));

    expect(result.current).toEqual(
      expect.objectContaining({ ...INITIAL_FORM, formState: INITIAL_FORM })
    );
  });

  it("should change field value", () => {
    const newValue = "Juan";

    const { result } = renderHook(() => useForm(INITIAL_FORM));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  it("should reset to initial value", () => {
    const newValue = "Random value";

    const { result } = renderHook(() => useForm(INITIAL_FORM));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(INITIAL_FORM.name);
    expect(result.current.formState.name).toBe(INITIAL_FORM.name);
  });
});
