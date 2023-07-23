import React from "react";

const BurgerMenu = ({ isMenuOpen, children }: any) => {
	return (
		<div className={`burger-menu ${isMenuOpen && "active"}`}>{children}</div>
	);
};

export default BurgerMenu;
