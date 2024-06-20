import {FaPhone, FaInstagram} from 'react-icons/fa6';
import {FaFacebookSquare} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

//	Handle Email
const handleEmail = email => {
	window.location.href = 'mailto:' + email;
};

//	Handle Phone
const handlePhone = phone => {
	window.location.href = 'tel:' + phone;
};

//	ContactOptions|
const contactOptions = [
	{
		icon: <FaPhone size={24} />,
		label: process.env.REACT_APP_SOCIAL_PHONE,
		action: () => handlePhone(process.env.REACT_APP_SOCIAL_PHONE),
	},
	{
		icon: <MdEmail size={24} />,
		label: process.env.REACT_APP_SOCIAL_EMAIL,
		action: () => handleEmail(process.env.REACT_APP_SOCIAL_EMAIL),
	},
	{
		icon: <FaInstagram size={24} />,
		label:
			'@' +
			process.env.REACT_APP_SOCIAL_INSTA.split('/').filter(Boolean).pop(),
		action: () => window.open(process.env.REACT_APP_SOCIAL_INSTA),
	},
	{
		icon: <FaFacebookSquare size={24} />,
		label: 'Fundacion Jacob Sifuentes',
		action: () => window.open(process.env.REACT_APP_SOCIAL_FACEB),
	},
];

export {contactOptions};
