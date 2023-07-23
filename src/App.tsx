import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import "./styles/styles.css";

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<HomePage />
		</div>
	);
};

export default App;
