import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Welcome } from './Components/Welcome';
import { LearnMore } from './Components/LearnMore';
import { GetEstimate } from './Components/GetEstimate';
import { Reviews } from './Components/Reviews';
import { Header } from './Components/Header';
import { AuthButton } from './Components/AuthButton';
import GlobalStyles from './Components/GlobalStyles';
import React from 'react';

const App = () => {
	const { user, isAuthenticated } = useAuth0();

	return (
		<Router>
			<GlobalStyles />
			<Welcome />
			<Header />
			<AuthButton />
			<LearnMore />
			{isAuthenticated && <GetEstimate />}
			<Reviews
				user={user}
				isAuthenticated={isAuthenticated}
			/>
		</Router>
	);
};

export default App;
