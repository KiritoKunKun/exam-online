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

		@media (max-width: 1120px) {
			font-size: 58%;
		}

		@media (max-width: 720px) {
			font-size: 54%;
		}
	}

	body {
		background: ${Colors.basicWhite};
		-webkit-font-smoothing: antialiased;
	}
`;
