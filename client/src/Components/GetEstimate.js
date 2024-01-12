import { styled } from 'styled-components';

const GetEstimate = () => {
	return (
		<Wrapper id="getestimate">
			<div>Form to submit here.</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { GetEstimate };
