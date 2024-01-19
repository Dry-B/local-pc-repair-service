import { BrowserRouter as Router } from 'react-router-dom';
import { Welcome } from './Components/Welcome';
import { LearnMore } from './Components/LearnMore';
import { GetEstimate } from './Components/GetEstimate';
import { LeaveReview } from './Components/LeaveReview';
import { Header } from './Components/Header';
import GlobalStyles from './Components/GlobalStyles';

const App = () => {
	return (
		<Router>
			<GlobalStyles />
			<Welcome />
			<Header />
			<LearnMore />
			<GetEstimate />
			<LeaveReview />
		</Router>
	);
};

export default App;
