import { useAuth0 } from '@auth0/auth0-react';
import { styled } from 'styled-components';

const AuthButton = () => {
	const { logout, isAuthenticated } = useAuth0();

	return (
		<Wrapper>
			{isAuthenticated && (
				<button
					style={buttonStyles}
					onClick={() => logout()}
				>
					Log Out
				</button>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 1rem;
`;
const buttonStyles = {
	padding: '1rem 2rem',
	border: 'none',
	borderRadius: '0.7rem',
	fontWeight: 'bold',
	color: '#ebebeb',
	backgroundColor: 'inherit',
};


export { AuthButton };
