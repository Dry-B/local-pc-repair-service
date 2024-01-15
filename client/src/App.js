import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { styled } from 'styled-components';
import { Welcome } from './Components/Welcome';
import { LearnMore } from './Components/LearnMore';
import { GetEstimate } from './Components/GetEstimate';
import { LeaveReview } from './Components/LeaveReview';
import { Header } from './Components/Header';

const App = () => {
	// useEffect(() => {
	// 	fetch('/serverping')
	// 		.then((res) => res.json())
	// 		.then((data) => console.log(data.message))
	// 		.catch((error) => console.log(error));
	// }, []);

	return (
		<GlobalStyles>
			<Router>
				<Welcome />
				<Header />
				<LearnMore />
				<GetEstimate />
				<LeaveReview />
			</Router>
		</GlobalStyles>
	);
};

const GlobalStyles = styled.div`
	font-family: Inter;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export default App;
