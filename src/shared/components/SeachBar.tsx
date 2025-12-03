interface Props {
	placeholder?: string;
	buttonText?: string;
}

export const SeachBar = ({
	placeholder = "Buscar",
	buttonText = "Buscar",
}: Props) => {
	return (
		<div className="search-container">
			<input type="text" placeholder={placeholder} />
			<button type="button">{buttonText}</button>
		</div>
	);
};
