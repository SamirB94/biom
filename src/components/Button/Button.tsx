import React from "react";

const Button = ({ children }: any) => {
	return (
		<button className='primary-button'>
			<span>{children}</span>
		</button>
	);
};

export default Button;
