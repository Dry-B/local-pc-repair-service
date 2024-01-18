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


const Container = styled.div`
	border: solid black 0.1rem;
	height: 80%;
	width: 70%;
	box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { LearnMore };
