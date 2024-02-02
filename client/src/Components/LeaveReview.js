import { styled } from 'styled-components';
import { OtherReview } from './OtherReview';
import { useState, useEffect } from 'react';

const LeaveReview = () => {
	const [reviewData, setReviewData] = useState(null);
	const [formData, setFormData] = useState({
		name: '',
		message: '',
		email: '',
	});

	useEffect(() => {
		fetch(`/api/getReviews`)
			.then((res) => res.json())
			.then((data) => setReviewData(data))
			.catch((err) =>
				console.error('Error fetching reviews:', err)
			);
	});

	const leaveReview = async (formData) => {
		await fetch('/api/createReview', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				formData,
			}),
		});
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		leaveReview(formData);
	};

	return (
		<Wrapper id="leavereview">
			<Container>
				<Form onSubmit={handleSubmit}>
					<h2>Leave A Review!</h2>
					<label>Message:</label>
					<textarea
						type="text"
						name="message"
						value={formData.message}
						onChange={handleChange}
					></textarea>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
					></input>
					<label>Email:</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					></input>
					<button type="submit">SUBMIT</button>
				</Form>
				<PreviousReviews>
					Other Reviews:
					{!reviewData
						? 'Loading...'
						: reviewData.data.map((e) => {
								return (
									<OtherReview
										key={e[0].name}
										reviewData={e}
									/>
								);
						  })}
				</PreviousReviews>
			</Container>
		</Wrapper>
	);
};

const PreviousReviews = styled.div`
	border: solid black 1px;
	height: 40rem;
	width: 30rem;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 10rem;
	justify-content: center;
	margin: 2rem;
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
