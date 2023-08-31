import React from "react";
import Hero from "../../components/Hero/Hero";
import Reviews from "../../components/Reviews/Reviews";
import MeetBiom from "../../components/MeetBiom/MeetBiom";
import BiomWipes from "../../components/BiomWipes/BiomWipes";
import BiomShowcase from "../../components/BiomShowcase/BiomShowcase";
import CleanWithBiom from "../../components/CleanWithBiom/CleanWithBiom";
import OceanCareWipes from "../../components/OceanCareWipes/OceanCareWipes";
import ChooseBiomColor from "../../components/ChooseBiomColor/ChooseBiomColor";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
	return (
		<div className='container'>
			<Hero />
			<MeetBiom />
			<BiomShowcase />
			<ChooseBiomColor />
			<Reviews />
			<BiomWipes />
			<OceanCareWipes />
			<CleanWithBiom />
			<Footer />
		</div>
	);
};

export default HomePage;
