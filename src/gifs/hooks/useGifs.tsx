import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQueryAction } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
	const [previousTerms, setPreviousTerms] = useState<string[]>([]);
	const [gifs, setGifs] = useState<Gif[]>([]);
	const gifsCache = useRef<Record<string, Gif[]>>({});

	const handleTermClick = async (term: string) => {
		if (gifsCache.current[term]) {
			setGifs(gifsCache.current[term]);
			return;
		}

		const gifs = await getGifsByQueryAction(term);
		setGifs(gifs);
	};

	const handleSearch = async (query: string) => {
		const trimmedQuery = query.trim().toLowerCase();

		if (trimmedQuery.length === 0) return;

		if (previousTerms.includes(trimmedQuery)) return;

		setPreviousTerms([trimmedQuery, ...previousTerms].slice(0, 8));

		const gifs = await getGifsByQueryAction(trimmedQuery);

		setGifs(gifs);

		gifsCache.current[trimmedQuery] = gifs;
	};

	return {
		gifs,
		previousTerms,

		handleSearch,
		handleTermClick,
	};
};
