import { styled } from 'styled-components';
import { OtherReview } from './OtherReview';
import { UpdateReview } from './UpdateReview';
import { ReviewForm } from './ReviewForm';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LeaveReview = () => {
	const { user, isAuthenticated } = useAuth0();
	const [reviewData, setReviewData] = useState(null);

	useEffect(() => {
		fetch(`/api/reviews`)
			.then((res) => res.json())
			.then((data) => setReviewData(data))
			.catch((err) =>
				console.error('Error fetching reviews:', err)
			);
	}, []);
	console.log(user);
	return (
		<Wrapper id="leavereview">
			<Container>
				{isAuthenticated ? (
					<ReviewForm user={user} />
				) : (
					<>Loading...</>
				)}
				<PreviousReviews>
					Reviews:
					<ul>
						{!reviewData
							? 'Loading...'
							: reviewData.data.map((e, index) => {
									return (
										<OtherReview
											key={index}
											reviewData={e}
										/>
									);
							  })}
					</ul>
				</PreviousReviews>
				{isAuthenticated && <UpdateReview />}
			</Container>
		</Wrapper>
	);
};

const PreviousReviews = styled.div`
	border: solid black 1px;
	height: 40rem;
	width: 30rem;
	overflow: auto;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: solid black 0.1rem;
	height: 80%;
	width: 70%;
	box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { LeaveReview };
