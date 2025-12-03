import type { KeyboardEvent } from "react";

interface Props {
	title: string;
	searches: string[];
	onTermClick: (term: string) => void;
}

export const PreviousSearches = ({ title, searches, onTermClick }: Props) => {
	const handleSearchOnEnter = (
		event: KeyboardEvent<HTMLLIElement>,
		search: string,
	) => {
		if (event.key === "Enter" || event.key === " ") {
			onTermClick(search);
		}
	};

	return (
		<div className="previous-searches">
			<h2>{title}</h2>
			<ul className="previous-searches-list">
				{searches.map((search) => (
					<li
						key={search}
						onClick={() => onTermClick(search)}
						onKeyDown={(event) => handleSearchOnEnter(event, search)}
					>
						{search}
					</li>
				))}
			</ul>
		</div>
	);
};
