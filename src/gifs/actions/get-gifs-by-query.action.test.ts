import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";
import AxiosMockAdapter from "axios-mock-adapter";

import { giphyResponseDataMock } from "../../../tests/mocks/giphy.response.data";
import { giphyApi } from "../api/giphy.api";

describe("getGifsByQuery", () => {
	let axiosMock = new AxiosMockAdapter(giphyApi);

	beforeEach(() => {
		axiosMock = new AxiosMockAdapter(giphyApi);
	});

	test("should return a list of gifs", async () => {
		axiosMock.onGet("/search").reply(200, giphyResponseDataMock);

		const gifs = await getGifsByQuery("cats");

		expect(gifs.length).toBe(10);

		for (const gif of gifs) {
			expect(gif).toStrictEqual({
				id: expect.any(String),
				title: expect.any(String),
				url: expect.any(String),
				height: expect.any(Number),
				width: expect.any(Number),
			});
		}
	});

	test("should return an empty list of gifs if query is empty", async () => {
		axiosMock.restore();

		const gifs = await getGifsByQuery("");

		expect(gifs.length).toBe(0);
	});

	test("should handle error when the API returns an error", async () => {
		const consoleErrorSpy = vi
			.spyOn(console, "error")
			.mockImplementation(() => {});

		axiosMock.onGet("/search").reply(400, { message: "Bad Request" });

		const gifs = await getGifsByQuery("dogs");

		expect(gifs.length).toBe(0);
		expect(consoleErrorSpy).toHaveBeenCalled();
		expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
		expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
	});
});
