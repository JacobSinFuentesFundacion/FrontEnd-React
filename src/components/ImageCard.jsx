import PropTypes from 'prop-types';

const ImageCard = ({image, className}) => {
	return (
		<div
			className={`flex flex-col gap-4 w-full ${className} overflow-hidden box-border rounded-lg`}
		>
			<img
				src={image}
				alt='ImageCard'
				className='w-full top-0 left-0 h-full object-cover'
			/>
		</div>
	);
};

ImageCard.propTypes = {
	image: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default ImageCard;