import { styled } from 'styled-components';

const LeaveReview = () => {
	return (
		<Wrapper id="leavereview">
			<Container>Leave a Review Here</Container>
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

export { LeaveReview };
