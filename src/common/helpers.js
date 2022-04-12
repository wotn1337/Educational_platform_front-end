// Возвращает массив, перемешанный в случайном порядке
export const shuffleArray = (array) => {
	const tempArray = [...array]
	tempArray.sort(() => Math.random() - 0.5)
	return tempArray
}