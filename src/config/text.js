import {FaStar, FaRegEye, FaFlag} from 'react-icons/fa';

const texts = [
	{
		title: 'Apoyo educativo y obras publicas para el desarrollo sostenible de la sociedad',
	},
	{
		title: 'Sobre nuestra fundacion',
		text_1:
			'Es una organización sin fines de lucro dedicada a apoyar a la educación y obras públicas como objetos sociales, fundada en junio de 2023, empezó a tejer una red de apoyo en instituciones educativas de zonas rurales y ejidos, contribuyendo al desarrollo y sostenibilidad del sector.',
		text_2:
			'Cuenta con Donataria Autorizada por parte del Servicio de Administración Tributaria, teniendo el permiso para recibir donativos monetarios y en especie de cualquier sitio del mundo.',
	},
	{
		title: 'Actividades',
	},
	{
		title: 'Contacto',
	},
];

const tagsOptions = [
	{
		title: 'Mision',
		text: 'Apoyar al sano desarrollo educativo y a la sostenibilidad de servicios públicos para generar bienestar social.',
		icon: <FaFlag size={48} />,
	},
	{
		title: 'Vision',
		text: 'Ser una organización reconocida por su impulso a la educación y servicios públicos internacional.',
		icon: <FaRegEye size={48} />,
	},
	{
		title: 'Valores',
		text: 'Respeto, Voluntad y Servicio.',
		icon: <FaStar size={48} />,
	},
];

export {texts, tagsOptions};