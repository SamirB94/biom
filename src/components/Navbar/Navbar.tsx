import React, { useState } from "react";
import Burger from "./Burger";

const Navbar = () => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

	const primaryNavbarItems = (
		<div>
			<ul className='navbar-items'>
				<li>
					<a href='/#'>
						<span>Shop</span>
					</a>
				</li>
				<li>
					<a href='/#'>
						<span>Why not Biom</span>
					</a>
				</li>
				<li>
					<a href='/#'>
						<span>Scents</span>
					</a>
				</li>
			</ul>
		</div>
	);

	const navbarLogo = (
		<div className='biom-logo'>
			<img
				alt='biom-logo'
				src='./assets/logos/biom.png'
				srcSet={"./assets/logos/biom@2x.png 2x"}
			/>
		</div>
	);

	const secondaryNavbarItems = (
		<div>
			<ul className='navbar-items'>
				<li>
					<a href='/#'>
						<span>Sign In</span>
					</a>
				</li>
				<li>
					<a href='/#'>
						<span>Cart</span>
					</a>
				</li>
				<li>
					<a href='/#'>
						<div className='cart-container'>
							<img
								className='cart'
								alt='cart'
								src='./assets/logos/cart.png'
								srcSet={"./assets/logos/cart@2x.png 2x"}
							/>
							<div>
								<p>0</p>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	);

	const burgerContent = (
		<div className='burger-content'>
			<Burger
				isBurgerMenuOpen={isBurgerMenuOpen}
				handleBurgerMenuOpen={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
			>
				{primaryNavbarItems}
				{secondaryNavbarItems}
			</Burger>
			{navbarLogo}
		</div>
	);

	const navbarContent = (
		<div className='navbar-content'>
			{primaryNavbarItems}
			{navbarLogo}
			{secondaryNavbarItems}
		</div>
	);

	return (
		<nav className='navbar'>
			{burgerContent}
			{navbarContent}
		</nav>
	);
};

export default Navbar;
