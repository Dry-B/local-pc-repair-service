import { styled } from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
	return (
		<Wrapper>
			<ButtonContainer>
				<HashLink smooth to="/#learnmore">
					<Button>Learn More</Button>
				</HashLink>
				<HashLink smooth to="/#getestimate">
					<Button>Get Estimate</Button>
				</HashLink>
				<HashLink smooth to="/#leavereview">
					<Button>Leave Review</Button>
				</HashLink>
			</ButtonContainer>
		</Wrapper>
	);
};

const ButtonContainer = styled.div`
	top: 0;
	position: sticky;
	z-index: 999;
	display: flex;
	height: 1rem;
	width: 40%;
	min-width: 30rem;
	justify-content: space-around;
`;
const Button = styled.button`
	border: none;
	background-color: inherit;
`;
const Wrapper = styled.div`
	top: 50vh;
	position: absolute;
	margin-top: 1rem;
	display: flex;
	width: 40%;
	min-width: 30rem;
	height: 100%;
	justify-content: space-around;
`;

export { Header };
