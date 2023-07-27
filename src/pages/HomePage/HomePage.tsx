import React from "react";
import Hero from "../../components/Hero/Hero";
import MeetBiom from "../../components/MeetBiom/MeetBiom";
import BiomShowcase from "../../components/BiomShowcase/BiomShowcase";
import ChooseBiomColor from "../../components/ChooseBiomColor/ChooseBiomColor";

const HomePage = () => {
	return (
		<div className='container'>
			<Hero />
			<MeetBiom />
			<BiomShowcase />
			<ChooseBiomColor />
		</div>
	);
};

export default HomePage;
