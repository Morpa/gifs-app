import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
	return (
		<>
			<header className="content-center">
				<h1>Gifs Search</h1>
				<p>Encontre os melhores gifs aqui</p>
			</header>

			<div className="search-container">
				<input type="text" placeholder="Procurar gifs" />
				<button type="button">Buscar</button>
			</div>

			<div className="previous-searches">
				<h2>Pesquisas anteriores</h2>
				<ul className="previous-searches-list">
					<li>Goku</li>
					<li>Vegeta</li>
					<li>Naruto</li>
					<li>Sasuke</li>
				</ul>
			</div>

			<div className="gifs-container">
				{mockGifs.map((gif) => (
					<div key={gif.id} className="gif-card">
						<img src={gif.url} alt={gif.title} />
						<h3>{gif.title}</h3>
						<p>
							{gif.width} x {gif.height} (1.5mb)
						</p>
					</div>
				))}
			</div>
		</>
	);
};
