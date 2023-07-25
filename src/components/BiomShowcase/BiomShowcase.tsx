import React from "react";
import ImageSlider from "./ImageSlider";

const BiomShowcase = () => {
	const showcaseItemsData = [
		{ src: "./assets/images/living-room-showcase.png", title: "living room" },
		{ src: "./assets/images/office-showcase.png", title: "office" },
		{ src: "./assets/images/kitchen-showcase.png", title: "kitchen" },
		{ src: "./assets/images/bathroom-showcase.png", title: "bathroom" },
	];

	const title = (
		<div className='showcase-title'>
			<p>where you need it,</p>
			<p>when you need it.</p>
		</div>
	);

	return (
		<div className='biom-showcase'>
			{title}
			<ImageSlider items={showcaseItemsData} />
		</div>
	);
};

export default BiomShowcase;
