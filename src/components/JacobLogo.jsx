import FullLogo from './../images/FullLogo.png';
import Midlogo from './../images/MidLogo.png';

export default function JacobLogo() {
	return (
		<>
			<img
				src={FullLogo}
				alt='Jacob Logo'
				className='hidden sm:block'
				style={{width: '76px'}}
			/>

			<img
				src={Midlogo}
				alt='Jacob Logo'
				className='block sm:hidden'
				style={{width: '76px'}}
			/>
		</>
	);
}
