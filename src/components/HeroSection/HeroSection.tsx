import React from "react";
import Button from "../Button/Button";

const HeroSection = () => {
	const background = (
		<img
			className='hero-background'
			src='./assets/images/kitchen.png'
			srcSet={"./assets/images/kitchen@2x.png 2x"}
			alt='kitchen'
		/>
	);
	const title = (
		<p className='hero-title'>
			So fresh. <br></br>So green.
		</p>
	);
	const description = (
		<p className='hero-description'>
			We believe that a more eco-friendly everyday makes a happier you and me.
			We’re on a mission to put sustainability in reach with
			better-for-the-planet wipes that are easy, effective, and plastic-free.
		</p>
	);

	const button = <Button>Get Started</Button>;

	const content = (
		<div className='hero-content'>
			{title}
			{description}
			{button}
		</div>
	);
	return (
		<div className='hero'>
			{background}
			{content}
		</div>
	);
};

export default HeroSection;
