import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import MeetBiomSection from "../../components/MeetBiomSection/MeetBiomSection";
import BiomShowcase from "../../components/BiomShowcase/BiomShowcase";

const HomePage = () => {
	return (
		<div className='container'>
			<HeroSection />
			<MeetBiomSection />
			<BiomShowcase />
		</div>
	);
};

export default HomePage;
