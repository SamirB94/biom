import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ChooseBiomColor = () => {
	return (
		<div className='choose-biom-color-container'>
			<div className='call-to-action-content'>
				<p>Ready to start wiping out waste?</p>
				<div className='button-content'>
					<button>CHOOSE YOUR VESSEL COLOR</button>
					<div className='arrow-icon-wrapper'>
						<BsArrowRight className='arrow-icon' color='' />
					</div>
				</div>
			</div>
			<div className='biom-items-content'>
				<div>
					<div>
						<p>Biom Dispenser</p>
						<p>OCEAN TEAL</p>
					</div>
					<img
						src='./assets/images/green-biom.png'
						srcSet='./assets/images/green-biom.png 2x'
					/>
				</div>
				<div>
					<div>
						<p>Biom Dispenser</p>
						<p>WHITE</p>
					</div>
					<img
						src='./assets/images/white-biom.png'
						srcSet='./assets/images/white-biom.png 2x'
					/>
				</div>
				<div>
					<div>
						<p>Biom Dispenser</p>
						<p>INK BLACK</p>
					</div>
					<img
						src='./assets/images/black-biom.png'
						srcSet='./assets/images/black-biom.png 2x'
					/>
				</div>
			</div>
		</div>
	);
};

export default ChooseBiomColor;
