import React from "react";

const BurgerNav = ({
	isBurgerMenuOpen,
	handleBurgerMenuOpen,
	children,
}: any) => {
	const burgerIcon = (
		<div onClick={handleBurgerMenuOpen} className='burger-icon'>
			<div
				className='first burger-item transform-item'
				style={{
					transform: isBurgerMenuOpen ? "rotate(45deg)" : "none",
				}}
			/>
			<div
				className='burger-item'
				style={{
					opacity: isBurgerMenuOpen ? 0 : 1,
					transform: isBurgerMenuOpen ? "translateX(-16px)" : "none",
				}}
			/>
			<div
				className='third burger-item transform-item'
				style={{
					transform: isBurgerMenuOpen
						? "translateX(-1px) rotate(-45deg)"
						: "none",
				}}
			/>
		</div>
	);

	const burgerMenu = (
		<div className={`burger-menu ${isBurgerMenuOpen && "active"}`}>
			{children}
		</div>
	);

	return (
		<>
			{burgerIcon}
			{burgerMenu}
		</>
	);
};

export default BurgerNav;
