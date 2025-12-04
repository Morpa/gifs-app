import { useState } from "react";
import { GiftList } from "./gifs/components/GiftList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SeachBar } from "./shared/components/SeachBar";

export const GifsApp = () => {
	const [previousTerms, setPreviousTerms] = useState(["goku"]);

	const handleTermClick = (term: string) => {
		console.log({ term });
	};

	const handleSearch = (query: string) => {
		const trimmedQuery = query.trim().toLowerCase();

		if (trimmedQuery.length === 0) return;

		if (previousTerms.includes(trimmedQuery)) return;

		setPreviousTerms([trimmedQuery, ...previousTerms].slice(0, 8));
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

			<GiftList gifs={mockGifs} />
		</>
	);
};
