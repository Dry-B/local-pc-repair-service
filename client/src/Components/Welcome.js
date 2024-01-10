import { styled } from 'styled-components';

const Welcome = () => {
	return (
		<Wrapper>
			<Container>
				<Title>PC Repairs</Title>
				<ButtonContainer>
					<Button>Learn More</Button>
					<Button>Get Estimate</Button>
					<Button>Leave Review</Button>
				</ButtonContainer>
			</Container>
		</Wrapper>
	);
};

const Title = styled.p`
	font-size: 5rem;
	margin: 0;
	font-family: Poppins;
`;
const Button = styled.button`
	border: none;
	background-color: inherit;
`;
const ButtonContainer = styled.div`
	display: flex;
	width: 40%;
	min-width: 30rem;
	justify-content: space-around;
`;
const Container = styled.div`
	width: 20%;
	min-width: 30rem;
	text-align: center;
	padding-bottom: 8%;
	display: flex;
	flex-direction: column;
`;
const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { Welcome };
