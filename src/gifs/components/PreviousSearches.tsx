interface Props {
	title: string;
	searches: string[];
	onTermClick: (term: string) => void;
}

export const PreviousSearches = ({ title, searches, onTermClick }: Props) => {
	return (
		<div className="previous-searches">
			<h2>{title}</h2>
			<ul className="previous-searches-list">
				{searches.map((search) => (
					<li
						key={search}
						onClick={() => onTermClick(search)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								onTermClick(search);
							}
						}}
					>
						{search}
					</li>
				))}
			</ul>
		</div>
	);
};
