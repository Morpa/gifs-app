import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
	placeholder?: string;
	buttonText?: string;
	onQuery: (query: string) => void;
}

export const SeachBar = ({
	placeholder = "Buscar",
	buttonText = "Buscar",
	onQuery,
}: Props) => {
	const [query, setQuery] = useState("");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			onQuery(query);
		}, 700);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [query, onQuery]);

	const handleSearch = () => {
		onQuery(query);
	};

	const handleSearchOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<div className="search-container">
			<input
				type="text"
				placeholder={placeholder}
				value={query}
				onChange={(event) => setQuery(event.target.value)}
				onKeyDown={handleSearchOnEnter}
			/>
			<button type="button" onClick={handleSearch}>
				{buttonText}
			</button>
		</div>
	);
};
