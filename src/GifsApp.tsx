import { GiftList } from "./gifs/components/GiftList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SeachBar } from "./shared/components/SeachBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
	const { gifs, previousTerms, handleSearch, handleTermClick } = useGifs();

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
