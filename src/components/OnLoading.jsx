import propTypes from 'prop-types';

function OnLoading({className}) {
	return (
		<div
			className={`inline-block max-h-[36px] py-[4px] h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
			role='status'
		>
			<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
				Loading...
			</span>
		</div>
	);
}

OnLoading.propTypes = {
	className: propTypes.string,
};

export default OnLoading;
