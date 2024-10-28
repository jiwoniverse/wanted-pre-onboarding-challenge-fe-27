import { css } from "@emotion/react";

const globalStyles = () => css`
	body {
		width: 100%;
		height: 100vh;

		display: flex;
		flex-direction: column;

		box-sizing: border-box;
		margin: 0;
		padding: 0;

		font-size: 1.6rem;
		word-break: keep-all;
	}
`;

export default globalStyles;
