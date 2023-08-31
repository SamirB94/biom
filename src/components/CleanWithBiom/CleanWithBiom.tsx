import React from "react";
import { BsInstagram } from "react-icons/bs";

const CleanWithBiom = () => {
	return (
		<div className='clean-with-biom'>
			<p className='hash-tag'>#cleanwithbiom</p>
			<div className='clean-with-biom-slider'>
				<img
					className='clean-with-biom-image'
					src='./assets/images/girl-wiping-2.png'
				/>
				<img
					className='clean-with-biom-image'
					src='./assets/images/black-biom-showcase.png'
				/>
				<img
					className='clean-with-biom-image'
					src='./assets/images/kitchen-counter.png'
				/>
				<img
					className='clean-with-biom-image'
					src='./assets/images/green-gold-living-room.png'
				/>
				<img
					className='clean-with-biom-image'
					src='./assets/images/white-biom-showcase.png'
				/>
				<img
					className='clean-with-biom-image'
					src='./assets/images/hand-wiping.png'
				/>
			</div>
			<div className='button-content'>
				<button>follow us on instagram</button>
				<div className='instagram-icon-wrapper'>
					<BsInstagram className='instagram-icon' color='' />
				</div>
			</div>
		</div>
	);
};

export default CleanWithBiom;
