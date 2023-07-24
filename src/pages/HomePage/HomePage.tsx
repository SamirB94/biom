import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import MeetBiomSection from "../../components/MeetBiomSection/MeetBiomSection";

const HomePage = () => {
	return (
		<div className='container'>
			<HeroSection />
			<MeetBiomSection />
		</div>
	);
};

export default HomePage;
