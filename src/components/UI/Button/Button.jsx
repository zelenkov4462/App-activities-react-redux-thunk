import React from 'react';
import styles from './Button.module.scss'

const Button = ({children, cl, ...props}) => {
	return (
		<button {...props} className={styles[cl]}>{children}</button>
	);
};

export default Button;