//  React
import {useState} from 'react';

//  Icons
import {MdErrorOutline} from 'react-icons/md';

//  Functions
import timeAgo from './../func/timeAgo.js';
import formatCurrency from './../func/formatCurrency.js';
import getCountryName from './../func/getCountryName.js';
import PropTypes from 'prop-types';

//  Components
import OnLoading from './../components/OnLoading.jsx';

//  Api
import ApiMain from '../api/main.api.js';

const TableDonation = ({ targetDonationRef }) => {
	const [getPays, setPays] = useState([]);
	const [onLoading, setOnLoading] = useState(false);
	const [onError, setOnError] = useState(false);
	const [onLoadLink, setOnLoadLink] = useState(false);
	const handleGetLink = async () => {
		setOnLoadLink(true);
		await ApiMain.get('/get-link', {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(response => {
			window.open(response.data.link, '_self');
		})
		.catch(error => {
			console.log(error);
		})
		.finally(() => {
			setOnLoadLink(false);
		});
	};

	useState(() => {
		async function fetchData() {
			setOnLoading(false);
			ApiMain.get('/get-pays', {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(response => {
				setPays(response.data.pays);
				setOnLoading(true);
			})
			.catch(error => {
				console.log(error);
				setOnError(true);
			})
			.finally(() => {
				setOnLoading(true);
			});
		}
		fetchData();
	}, []);

	return (
		<div
			className='w-full items-center flex flex-col gap-5'
			ref={targetDonationRef}
		>
			<span className='w-full text-center text-[32px] pb-6'>
				Donaciones
			</span>
			<div className='w-full rounded-md py-4 px-2'>
				<table className='table-auto w-full border-neutral-200'>
					<thead className='bg-[#000]'>
						<tr>
							<th scope='col' className='py-4'>
								Desde
							</th>
							<th scope='col' className='py-4'>
								Tiempo
							</th>
							<th scope='col' className='py-4'>
								Cantidad
							</th>
						</tr>
					</thead>

					<tbody className=''>
						{onLoading ? (
							onError ? (
								<tr>
									<td
										colSpan='3'
										className='text-center w-full h-24 rounded-md'
									>
										<div className='flex flex-row items-center justify-center gap-2 dark:text-gray-400'>
											<MdErrorOutline size={32} />
											<span>
												Error al cargar los datos. Intente de nuevo mas
												tarde
											</span>
										</div>
									</td>
								</tr>
							) : (
								getPays.map((pay, index) => (
									<tr
										key={index}
										className={`py-4 ${
											index !== getPays.length - 1
												? 'border-b border-neutral-200 dark:border-white/10'
												: ''
										}`}
									>
										<td className='text-sm sm:text-base py-4 font-medium'>
											{getCountryName(pay.country)}
										</td>
										<td className='text-sm sm:text-base py-4'>
											{timeAgo(pay.time_created * 1000)}
										</td>
										<td className='text-sm sm:text-base py-4'>
											${formatCurrency(pay.amount)}{' '}
											{pay.currency.toUpperCase()}
										</td>
									</tr>
								))
							)
						) : (
							<tr>
								<td colSpan='3' className='text-center py-8'>
									<OnLoading className={'dark:text-[#fff]'} />
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			<div className='flex flex-row justify-center w-full'>
				<button
					onClick={handleGetLink}
					className='dark:bg-white border-none w-full max-h-[40px] sm:w-fit h-[40px] py-0 sm:px-12 rounded-md transition-all duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105'
				>
					{onLoadLink ? (
						<OnLoading className={'dark:text-[#000]'} />
					) : (
						<span className='dark:text-black h-full'>Donar</span>
					)}
				</button>
			</div>
		</div>
	);
}

TableDonation.propTypes = {
	targetDonationRef: PropTypes.object,
};

export default TableDonation;