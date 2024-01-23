import { styled } from 'styled-components';

const LeaveReview = () => {
	return (
		<Wrapper id="leavereview">
			<Container>
				<Form>
					<h2>Leave A Review!</h2>
					<label>Message:</label>
					<textarea></textarea>
					<label>Name:</label>
					<input></input>
					<label>Email:</label>
					<input></input>
				</Form>
				<PreviousReviews>Other Reviews:</PreviousReviews>
			</Container>
		</Wrapper>
	);
};

const PreviousReviews = styled.div`
	border: solid black 1px;
	height: 40rem;
	width: 30rem;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 10rem;
	justify-content: center;
	margin: 2rem;
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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
