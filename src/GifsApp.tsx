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
		console.log({ query });
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
