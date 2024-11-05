import styled from "@emotion/styled";

export const Layout = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	position: relative;

	overflow-x: hidden;
	display: flex;
	flex: 1;
	flex-grow: 1;

	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 0 2rem;

	width: 100%;
`;
