import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
	const primaryFooterInfoItems = (
		<div>
			<ul className='primary-footer-info-items'>
				<li>
					<a href='/#'>
						<span>Shop</span>
					</a>
				</li>
				<li>
					<a href='/#'>
						<span>Why Biom</span>
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

	const footerLogo = (
		<div className='footer-biom-logo'>
			<img
				alt='footer-biom-logo'
				src='./assets/logos/biom-logo-footer.png'
				srcSet={"./assets/logos/biom-logo-footer@2x.png 2x"}
			/>
		</div>
	);

	const secondaryFooterInfoItems = (
		<div>
			<ul className='secondary-footer-info-items'>
				<li>
					<a href='/#'>
						<span>Faqs</span>
					</a>
				</li>
				<li>
					<a href='/#'>
						<span>Account</span>
					</a>
				</li>
				<li>
					<a href='/#'>
						<span>Help</span>
					</a>
				</li>
			</ul>
		</div>
	);

	return (
		<div className='footer'>
			<div className='footer-image-content-wrapper'>
				<img src='./assets/images/biom-wipe.png' />
				<div className='footer-subscription-content'>
					<p className='footer-subscription-title'>
						Get the latest news delivered to your inbox.
					</p>
					<p className='footer-subscription-description'>
						Get access to the exciting stuff — exclusive new deals, product
						launches and more. Plus, get a 10% discount on your next order.
					</p>
					<div className='input-wrapper'>
						<input placeholder='Enter your email address' />
						<div className='input-icon-wrapper'>
							<BsArrowRight className='arrow-right-dark-bg' />
						</div>
					</div>
				</div>
			</div>
			<div className='footer-info-items'>
				<div className='footer-contact-items'>
					{primaryFooterInfoItems}
					{footerLogo}
					{secondaryFooterInfoItems}
				</div>
			</div>
		</div>
	);
};

export default Footer;
