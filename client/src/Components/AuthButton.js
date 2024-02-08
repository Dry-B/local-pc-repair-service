import { useAuth0 } from '@auth0/auth0-react';

const AuthButton = () => {
	const { logout, loginWithRedirect, isAuthenticated } =
		useAuth0();

	return (
		<>
			{isAuthenticated ? (
				<button onClick={() => logout()}>Log Out</button>
			) : (
				<button onClick={() => loginWithRedirect()}>
					Sign In
				</button>
			)}
		</>
	);
};

export { AuthButton };
