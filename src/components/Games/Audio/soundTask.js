// Воспроизводит задание игры из подготовленного аудиофайла
export const soundTask = (task) => {
	const audio = new Audio(task);
	audio.preload = 'auto';
	audio.play();
}