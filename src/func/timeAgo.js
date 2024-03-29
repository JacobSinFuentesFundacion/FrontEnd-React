const timeAgo = timestamp => {
	const seconds = Math.floor((new Date() - timestamp) / 1000);
	let interval = Math.floor(seconds / 31536000);

	if (interval >= 1) {
		return `hace ${interval} años`;
	}
	interval = Math.floor(seconds / 2592000);
	if (interval >= 1) {
		return `hace ${interval} meses`;
	}
	interval = Math.floor(seconds / 86400);
	if (interval >= 1) {
		return `hace ${interval} días`;
	}
	interval = Math.floor(seconds / 3600);
	if (interval >= 1) {
		return `hace ${interval} horas`;
	}
	interval = Math.floor(seconds / 60);
	if (interval >= 1) {
		return `hace ${interval} minutos`;
	}
	return 'hace unos segundos';
};

export default timeAgo;
