const initState = {
	images: [
		'https://cdn.ananasposter.ru/image/cache/catalog/poster/film/87/6361-1000x830.jpg',
		'https://cdnimg.rg.ru/img/content/194/40/34/kinopoisk.ru-Batman_3A-The-Animated-Series-1700423_d_850.jpg',
		'https://vcomicse.ru/wp-content/uploads/2017/10/flesh.jpg',
		'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/08/hulk-mjolnir-thor-1200x900-1.jpg',
		'https://wikicomics.ru/uploads/posts/2020-07/1595661230_chudo-zhenschina.jpg'
	]
};

const pairsReducer = (state = initState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default pairsReducer;