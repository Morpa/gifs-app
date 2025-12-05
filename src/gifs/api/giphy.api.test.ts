import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe("giphyApi", () => {
	test("should be configured correctly", () => {
		const params = giphyApi.defaults.params;
		expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");

		expect(params).toStrictEqual({
			lang: "pt",
			api_key: import.meta.env.VITE_GIPHY_API_KEY,
		});
	});
});
