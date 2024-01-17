import { styled } from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
	return (
		<Wrapper>
			<ButtonContainer>
				<HashLink smooth to="/#getestimate">
					<EstimateButton style={buttonStyles}>
						Get Estimate
					</EstimateButton>
				</HashLink>
				<HashLink smooth to="/#learnmore">
					<Button style={buttonStyles}>
						Learn More
					</Button>
				</HashLink>
				<HashLink smooth to="/#leavereview">
					<Button style={buttonStyles}>
						Leave Review
					</Button>
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
	width: 45%;
	min-width: 30rem;
	justify-content: space-around;
`;
const EstimateButton = styled.button`
	background-color: #ff4c4c;

	font-size: 1rem;
`;
const Button = styled.button`
	background-color: inherit;
	font-size: 1rem;
	color: #ebebeb;
`;
const buttonStyles = {
	padding: '1rem 2rem',
	border: 'none',
	borderRadius: '0.7rem',
	fontWeight: 'bold',
	color: '#ebebeb',
};
const Wrapper = styled.div`
	top: 50vh;
	position: absolute;
	margin-top: 1rem;
	display: flex;
	height: 100%;
	justify-content: center;
`;





export { Header };
