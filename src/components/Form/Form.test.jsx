import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import VinForm from "./Form";
import fetchChars from "../../api/chars";

vi.mock("../../api/chars");

test("calls API on valid submit", async () => {
  fetchChars.mockResolvedValue([{ Variable: "Make", Value: "Honda" }]);

  const mockSetResults = vi.fn();

  render(
    <VinForm
      setResults={mockSetResults}
      setRecentSearch={() => {}}
      selectedVin=""
    />,
  );

  fireEvent.change(screen.getByPlaceholderText(/enter vin/i), {
    target: { value: "1HGCM82633A004352" },
  });

  fireEvent.click(screen.getByText(/decode/i));

  await screen.findByText(/decode/i);

  expect(fetchChars).toHaveBeenCalledWith("1HGCM82633A004352");
  expect(mockSetResults).toHaveBeenCalledWith([
    { Variable: "Make", Value: "Honda" },
  ]);
});

test("renders VIN input and Decode button", () => {
  render(
    <VinForm setResults={() => {}} setRecentSearch={() => {}} selectedVin="" />,
  );

  expect(screen.getByPlaceholderText(/enter vin/i)).toBeInTheDocument();
  expect(screen.getByText(/decode/i)).toBeInTheDocument();
});

test("shows validation error if submitted empty", async () => {
  render(
    <VinForm setResults={() => {}} setRecentSearch={() => {}} selectedVin="" />,
  );

  fireEvent.click(screen.getByText(/decode/i));

  expect(
    await screen.findByText(/this field is required/i),
  ).toBeInTheDocument();
});
