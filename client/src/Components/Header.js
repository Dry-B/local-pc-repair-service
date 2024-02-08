import { styled } from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		<Wrapper>
			<Container>
				<ButtonContainer>
					<HashLink smooth to="/#learnmore">
						<Button style={buttonStyles}>
							Learn More
						</Button>
					</HashLink>
					{isAuthenticated ? (
						<HashLink smooth to="/#getestimate">
							<EstimateButton style={buttonStyles}>
								Get Estimate
							</EstimateButton>
						</HashLink>
					) : (
						<div>
							<EstimateButton
								onClick={() =>
									loginWithRedirect()
								}
								style={buttonStyles}
							>
								Get Estimate
							</EstimateButton>
						</div>
					)}
					<HashLink smooth to="/#leavereview">
						<Button style={buttonStyles}>
							Reviews
						</Button>
					</HashLink>
				</ButtonContainer>
			</Container>
		</Wrapper>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	margin: 50vh 0;
`;
const ButtonContainer = styled.div`
	top: 0;
	position: sticky;
	z-index: 999;
	display: flex;
	height: 1rem;
	width: 40rem;
	justify-content: space-around;
	margin-top: 1rem;
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
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
`;





export { Header };
