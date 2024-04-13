//  Imports
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import ImageCard from './components/ImageCard.jsx';

//  Components
import NavBarComponent from './components/NavBar.jsx';
import TableDonation from './components/TableDonation.jsx';

//  Images
import MainImage from './images/Main.png';
import Image1 from './images/activities/image_1.png';
import Image2 from './images/activities/image_2.png';
import Image3 from './images/activities/image_3.png';
import Image4 from './images/activities/image_4.png';
import Image5 from './images/activities/image_5.png';

//  Config
import {texts, tagsOptions} from './config/text.js';
import {contactOptions} from './config/contact.js';


import {
	REACT_APP_SERVICE_ID,
	REACT_APP_TEMPLATE_ID,
	REACT_APP_PUBLIC_KEY,
	REACT_APP_DONATION,
} from './config/enviroment.js';

function App() {
	const form = useRef(null);
	const contactForm = async e => {
		e.preventDefault();
		emailjs
			.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form.current, {
				publicKey: REACT_APP_PUBLIC_KEY,
			})
			.then(() => {
				alert('Mensaje enviado correctamente');
				window.location.reload();
			});
	};

	const menuItemsMain = [
		{
			name: 'Sobre Fundacion',
			function: () =>
				targetContactRef.current &&
				window.scrollTo({
					top: targetAboutRef.current.offsetTop - 70,
					behavior: 'smooth',
				}),
		},
		{
			name: 'Actividades',
			function: () =>
				targetContactRef.current &&
				window.scrollTo({
					top: targetActivitiesRef.current.offsetTop - 70,
					behavior: 'smooth',
				}),
		},
		{
			name: 'Contacto',
			function: () =>
				targetContactRef.current &&
				window.scrollTo({
					top: targetContactRef.current.offsetTop - 70,
					behavior: 'smooth',
				}),
		},
		"False".toLowerCase() === REACT_APP_DONATION && {
			name: 'Donaciones',
			function: () =>
				targetDonationRef.current &&
				window.scrollTo({
					top: targetDonationRef.current.offsetTop - 70,
					behavior: 'smooth',
				}),
		},
	];

	const targetAboutRef = useRef(null);
	const targetActivitiesRef = useRef(null);
	const targetContactRef = useRef(null);
	const targetDonationRef = useRef(null);

	return (
		<div className='bg-[#000000]'>
			<NavBarComponent menuItemsMain={menuItemsMain} />

			<div className='px-3 sm:px-6 w-full flex flex-col flex-nowrap py-6'>
				<div className='mx-auto max-w-[967px] flex flex-col gap-8'>
					<div className='bg-gradient-to-r from-[#3b1c4a] to-[#100316] rounded-lg px-6 py-12'>
						<div className='flex flex-col sm:flex-row items-center'>
							<span className='text-[36px] text-center'>
								{texts[0].title}
							</span>
							<div>
								<img
									src={MainImage}
									alt='MainImage'
									className='w-full'
								/>
							</div>
						</div>
					</div>

					<div
						className='w-full items-center flex flex-col gap-5'
						ref={targetAboutRef}
					>
						<span className='w-full text-center text-[32px] pb-6'>
							{texts[1].title}
						</span>
						<span className='text-center'>{texts[1].text_1}</span>
						<span className='text-center'>{texts[1].text_2}</span>
					</div>

					<div className='flex flex-col sm:flex-row flex-nowrap gap-4'>
						{tagsOptions.map((tag, index) => (
							<div
								key={index}
								className='py-6 px-2 border border-[#464646] flex flex-col flex-1 bg-gradient-to-r from-[#2f2f2f]/60 to-transparent rounded-lg gap-8 items-center'
							>
								{tag.icon}
								<div className='flex flex-col'>
									<span className='text-[32px] text-center'>
										{tag.title}
									</span>
									<span className='text-center'>{tag.text}</span>
								</div>
							</div>
						))}
					</div>

					<div
						className='w-full items-center flex flex-col gap-5'
						ref={targetActivitiesRef}
					>
						<span className='w-full text-center text-[32px] pb-6'>
							{texts[2].title}
						</span>

						<div className='grid grid-cols-1 grid-rows-5 sm:grid-cols-6 sm:grid-rows-2 gap-4 sm:max-h-[640px]'>
							<ImageCard image={Image1} className='sm:col-span-2' />
							<ImageCard image={Image2} className='sm:col-span-2' />
							<ImageCard image={Image3} className='sm:col-span-2' />
							<ImageCard image={Image4} className='sm:col-span-3' />
							<ImageCard image={Image5} className='sm:col-span-3' />
						</div>
					</div>

					<div
						className='w-full items-center flex flex-col gap-5'
						ref={targetContactRef}
					>
						<span className='w-full text-center text-[32px] pb-6'>
							{texts[3].title}
						</span>

						<div className='grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-0 gap-24 w-full'>
							<div className='flex flex-col justify-center gap-6'>
								{contactOptions.map((contact, index) => (
									<div key={index} className='flex flex-row gap-4'>
										{contact.icon}
										<span>{contact.label}</span>
									</div>
								))}
							</div>

							<form
								ref={form}
								onSubmit={contactForm}
								className='flex flex-col w-full gap-6'
							>
								<div className='flex flex-col w-full'>
									<span>Nombre</span>
									<input
										className='bg-[#0b0b0b] rounded-md py-1 px-2'
										type='text'
										name='from_name'
										id='from_name'
									/>
								</div>

								<div className='flex flex-col w-full'>
									<span>Correo</span>
									<input
										className='bg-[#0b0b0b] rounded-md py-1 px-2'
										type='email'
										name='from_email'
										id='from_email'
									/>
								</div>

								<div className='flex flex-col w-full'>
									<span>Mensaje</span>
									<textarea
										className='bg-[#0b0b0b] rounded-md resize-none py-1 px-2'
										name='message'
										id='message'
										cols='30'
										rows='10'
									></textarea>
								</div>

								<input
									className='w-full bg-[#0b0b0b] rounded-md py-2 px-1 cursor-pointer'
									type='submit'
									value='Enviar'
								/>
							</form>
						</div>
					</div>

					{"False".toLowerCase() === REACT_APP_DONATION && (
						<TableDonation targetDonationRef={targetDonationRef} />
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
