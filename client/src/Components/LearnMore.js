import { styled } from 'styled-components';

const LearnMore = () => {
	return (
		<Wrapper id="learnmore">
			<Container>
				Learn more about our services here.
			</Container>
		</Wrapper>
	);
};


const Container = styled.div``;
const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { LearnMore };
