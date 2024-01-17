import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Welcome } from './Components/Welcome';
import { LearnMore } from './Components/LearnMore';
import { GetEstimate } from './Components/GetEstimate';
import { LeaveReview } from './Components/LeaveReview';
import { Header } from './Components/Header';
import GlobalStyles from './Components/GlobalStyles';

const App = () => {
	useEffect(() => {
		fetch('/serverping')
			.then((res) => res.json())
			.then((data) => console.log(data.message))
			.catch((error) => console.log(error));
	}, []);

	return (
		<Router>
			<GlobalStyles />
			<Welcome />
			<Header />
			<GetEstimate />
			<LearnMore />
			<LeaveReview />
		</Router>
	);
};


export default App;
