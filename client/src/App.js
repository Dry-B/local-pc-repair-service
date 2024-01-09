import { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import { styled } from 'styled-components';
import { Welcome } from './Components/Welcome';
import { Main } from './Components/Main';

const App = () => {
	useEffect(() => {
		fetch('/')
			.then((res) => res.json())
			.then((data) => console.log(data.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<GlobalStyles>
			<Router>
				<Welcome />
				<Routes>
					<Route path="/" element={<Main />} />
				</Routes>
			</Router>
		</GlobalStyles>
	);
};

const GlobalStyles = styled.div`
	text-align: center;
`;

export default App;
