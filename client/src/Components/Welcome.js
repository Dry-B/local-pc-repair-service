import { styled } from 'styled-components';

const Welcome = () => {
	return (
		<Wrapper>
			<Container>
				<Title>PC Repairs</Title>
			</Container>
		</Wrapper>
	);
};

const Title = styled.p`
	font-size: 5rem;
	margin: 0;
	font-family: Poppins;
`;

const Container = styled.div`
	width: 20%;
	min-width: 30rem;
	text-align: center;
	display: flex;
	flex-direction: column;
`;
const Wrapper = styled.div`
	width: 100%;
	height: 50vh;
	padding-bottom: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: end;
	align-items: center;
`;

export { Welcome };
