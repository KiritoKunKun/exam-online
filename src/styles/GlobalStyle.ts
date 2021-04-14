import { createGlobalStyle } from 'styled-components';
import { Colors } from './Colors';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html {
		/* 1rem = 10px */
		font-size: 62.5%;
		font-family: Roboto, sans-serif;

		@media (max-width: 768px) {
			font-size: 43.75%;
		}
	}

	body {
		background: ${Colors.basicWhite};
		-webkit-font-smoothing: antialiased;
	}
`;
