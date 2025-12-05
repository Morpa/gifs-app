import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";

describe("useGifs", () => {
	test("should return default values and methods", () => {
		const { result } = renderHook(() => useGifs());

		expect(result.current.gifs.length).toBe(0);
		expect(result.current.previousTerms.length).toBe(0);
		expect(result.current.handleSearch).toBeDefined();
		expect(result.current.handleTermClick).toBeDefined();
	});

	test("should return a list of gifs", async () => {
		const { result } = renderHook(() => useGifs());

		await act(async () => {
			await result.current.handleSearch("cats");
		});

		expect(result.current.gifs.length).toBe(10);
	});

	test("should return a list of gifs when handleTermClicked is called", async () => {
		const { result } = renderHook(() => useGifs());

		await act(async () => {
			await result.current.handleSearch("dogs");
		});

		expect(result.current.gifs.length).toBe(10);
	});

	test("should return a list of gifs from cache", async () => {
		const { result } = renderHook(() => useGifs());

		await act(async () => {
			await result.current.handleSearch("birds");
		});

		expect(result.current.gifs.length).toBe(10);

		vi.spyOn(gifActions, "getGifsByQuery").mockRejectedValue(
			new Error("This is my custm error"),
		);

		await act(async () => {
			await result.current.handleSearch("birds");
		});

		expect(result.current.gifs.length).toBe(10);
	});

	test("should return no more than 8 previous terms", async () => {
		const { result } = renderHook(() => useGifs());

		vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue([]);

		for (let i = 0; i < 10; i++) {
			await act(async () => {
				await result.current.handleSearch(`term${i + 1}`);
			});
		}

		expect(result.current.previousTerms.length).toBe(8);
		expect(result.current.previousTerms).toStrictEqual([
			"term10",
			"term9",
			"term8",
			"term7",
			"term6",
			"term5",
			"term4",
			"term3",
		]);
	});
});
