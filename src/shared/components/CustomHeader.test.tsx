import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
	const textTitle = "Sample Title";
	const textDescription = "Sample Description";

	test("should render title and description properly", () => {
		render(<CustomHeader title={textTitle} description={textDescription} />);

		expect(screen.getByText(textTitle)).toBeDefined();
		expect(screen.getByText(textDescription)).toBeDefined();
		expect(screen.getByRole("paragraph").innerHTML).toBe(textDescription);
	});

	test("should render only title when description is not provided", () => {
		render(<CustomHeader title={textTitle} />);

		expect(screen.getByText(textTitle)).toBeDefined();
		expect(screen.getByRole("heading")).toBeDefined();
		expect(screen.queryByText(textDescription)).toBeNull();
	});
});
