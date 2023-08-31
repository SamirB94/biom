import React from "react";
import Button from "../Button/Button";

const BiomWipes = () => {
	return (
		<div className='biom-wipes-container'>
			<div className='girl-wiping-image'>
				<img src='./assets/images/girl-wiping.png' />
			</div>
			<div className='biom-wipes-image'>
				<img src='./assets/images/biom-wipes.png' />
			</div>
			<div className='biom-wipes-info-wrapper'>
				<div className='biom-wipes-info'>
					<p className='biom-wipes-title'>BIOM WIPES</p>
					<p className='biom-wipes-subtitle'>Better for you, and the planet.</p>
					<p className='biom-wipes-description'>
						The experience of clean should feel amazing. In a time when we’re
						constantly sanitizing, it can be damaging to our hands and skins. We
						decided to load our wipes with Aloe to take care of you, while you
						take care of your home.
					</p>
					<div className='biom-wipes-bullet-items'>
						<div className='bullet-item'>
							<img src='./assets/logos/biodegradable-icon.png' />
							<p>100% biodegradable</p>
						</div>
						<div className='bullet-item'>
							<img src='./assets/logos/plastic-free-icon.png' />
							<p>Plastic-free</p>
						</div>
						<div className='bullet-item'>
							<img src='./assets/logos/plant-based-icon.png' />
							<p>100% plant-based</p>
						</div>
					</div>
					<Button dark>Subscribe now</Button>
				</div>
			</div>
		</div>
	);
};

export default BiomWipes;
