import PropTypes from 'prop-types';
import {useRef} from 'react';

const VideoJacob = ({isVideoInteract, isVideoOpen, onCloseVideo, onVideoInteract}) => {
	const videoSource = useRef(null);
	const toggleVisibility = isVideoInteract ? (isVideoOpen ? 'animate-slideDown block' : 'animate-slideUp block') : 'hidden';
	const pauseVideo = () => {
		videoSource.current.pause();
		videoSource.current.currentTime = 0;
	};

	return (
		<div
			className={`
				w-full h-full fixed top-0 left-0 bg-[#00000080] z-50
				flex flex-row justify-center items-center
				${toggleVisibility}
			`}
		>
			<div
				className={`
					bg-[#303030] rounded-xl 
					border-2 border-[#464f5c] m-0 
					overflow-hidden shadow-2xl
					transform max-w-[967px]
					mx-auto ${toggleVisibility}
				`}
			>
				<div className='p-2 py-5'>
					<div className='h-[80vh]  aspect-[3/5] overflow-y-auto relative w-full overflow-hidden'>
						<video ref={videoSource} className='h-full mx-auto rounded-lg' controls>
							<source
								src={require('./../videos/video.mp4')}
								type='video/mp4'
							/>
						</video>
					</div>
				</div>

				<hr className='border-[#464f5c] border-1' />

				<div className='w-full flex flex-row justify-center '>
					<button onClick={() => {
						onCloseVideo();
						onVideoInteract();
						pauseVideo();
					}} className='w-full p-3'>
						<span>Cerrar</span>
					</button>
				</div>
			</div>
		</div>
	);
};

VideoJacob.propTypes = {
	isVideoOpen: PropTypes.bool.isRequired,
	onCloseVideo: PropTypes.func.isRequired,
	isVideoInteract: PropTypes.bool.isRequired,
	onVideoInteract: PropTypes.func.isRequired,
};

export default VideoJacob;
