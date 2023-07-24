import React from "react";

type ButtonProps = {
	children: string;
	dark?: boolean;
};

const Button = ({ children, dark = false }: ButtonProps) => {
	return (
		<button className={`primary-button ${dark && "dark"}`}>
			<span>{children}</span>
		</button>
	);
};

export default Button;
