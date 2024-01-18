import { styled } from 'styled-components';

const GetEstimate = () => {
	return (
		<Wrapper id="getestimate">
			<Container>
				<Form>
					<h2>How can we help?</h2>
					<label>Whats going on?</label>
					<textarea></textarea>
					<label>How can we contact you?</label>
					<input></input>
					<label>What is your prefered name?</label>
					<input></input>
				</Form>
			</Container>
		</Wrapper>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 10rem;
`;
const Container = styled.div`
	border: solid black 0.1rem;
	height: 80%;
	width: 70%;
	box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { GetEstimate };
