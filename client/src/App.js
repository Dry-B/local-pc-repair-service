import { useEffect } from 'react';
import { styled } from 'styled-components';
import { Welcome } from './Components/Welcome';
import { LearnMore } from './Components/LearnMore';
import { GetEstimate } from './Components/GetEstimate';
import { LeaveReview } from './Components/LeaveReview';

const App = () => {
	useEffect(() => {
		fetch('/serverping')
			.then((res) => res.json())
			.then((data) => console.log(data.message))
			.catch((error) => console.log(error));
	}, []);

	return (
		<GlobalStyles>
			<Welcome />
			<LearnMore />
			<GetEstimate />
			<LeaveReview />
		</GlobalStyles>
	);
};

const GlobalStyles = styled.div``;

export default App;
