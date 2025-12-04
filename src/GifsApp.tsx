import { useState } from "react";
import { GiftList } from "./gifs/components/GiftList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SeachBar } from "./shared/components/SeachBar";
import { getGifsByQueryAction } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
	const [previousTerms, setPreviousTerms] = useState<string[]>([]);
	const [gifs, setGifs] = useState<Gif[]>([]);

	const handleTermClick = (term: string) => {
		console.log({ term });
	};

	const handleSearch = async (query: string) => {
		const trimmedQuery = query.trim().toLowerCase();

		if (trimmedQuery.length === 0) return;

		if (previousTerms.includes(trimmedQuery)) return;

		setPreviousTerms([trimmedQuery, ...previousTerms].slice(0, 8));

		const gifs = await getGifsByQueryAction(trimmedQuery);

		setGifs(gifs);
	};

	return (
		<>
			<CustomHeader
				title="Gifs Search"
				description="Encontre os melhores gifs aqui"
			/>

			<SeachBar
				placeholder="Procurar gifs"
				buttonText="Buscar"
				onQuery={handleSearch}
			/>

			<PreviousSearches
				title="Pesquisas anteriores"
				searches={previousTerms}
				onTermClick={handleTermClick}
			/>

			<GiftList gifs={gifs} />
		</>
	);
};
