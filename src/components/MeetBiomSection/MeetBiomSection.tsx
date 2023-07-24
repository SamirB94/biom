import React from "react";
import Button from "../Button/Button";

const MeetBiomSection = () => {
	const meetBiom = (
		<div className='meet-biom-container'>
			<div className='meet-biom'>
				<span>meet biom</span>
			</div>
		</div>
	);
	const background = (
		<img
			className='background'
			src='./assets/images/meet-biom-background.png'
			srcSet='./assets/images/meet-biom-background@2x.png'
		/>
	);
	const title = <p className='title'>The Biom Dispenser</p>;
	const subtitle = (
		<p className='subtitle'>Redefine your experience of clean.</p>
	);
	const description = (
		<p className='description'>
			A quality engineered wipes dispenser that looks beautiful in your home,
			making better habits for your home and planet always within reach.
		</p>
	);
	const bulletItem = (logoSrc: string, desc: string) => {
		const logoSrc2x = logoSrc.replace(/(\.[\w\d_-]+)$/i, "@2x$1");
		console.log(logoSrc2x);
		return (
			<div className='bullet-item'>
				<img src={logoSrc} srcSet={`${logoSrc2x} 2x`} />
				<p>{desc}</p>
			</div>
		);
	};
	const bullets = (
		<div className='bullets'>
			{bulletItem(
				"./assets/logos/fit-your-home.png",
				"Beautiful design, fit for your home"
			)}
			{bulletItem(
				"./assets/logos/exterior.png",
				"Durable stainless steel exterior"
			)}
			{bulletItem("./assets/logos/test-tube.png", "Non-toxic, BPA free")}
		</div>
	);
	const button = <Button dark>Shop Now</Button>;
	const content = (
		<div className='content'>
			{title}
			{subtitle}
			{description}
			{bullets}
			{button}
		</div>
	);
	return (
		<div className='meet-biom-section'>
			{meetBiom}
			{background}
			{content}
		</div>
	);
};

export default MeetBiomSection;
