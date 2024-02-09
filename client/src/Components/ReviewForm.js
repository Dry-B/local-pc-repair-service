import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

const ReviewForm = (user) => {
	const [userExists, setUserExists] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		message: '',
	});

	const leaveReview = async (formData) => {
		await fetch('/api/review', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				formData,
			}),
		});
	};

	useEffect(() => {
		fetch(`/api/review/${user.sub}`)
			.then((res) => res.json())
			.then((data) => setUserExists(data))
			.catch((err) =>
				console.error('Error fetching reviews:', err)
			);
	}, []);
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
			['id']: user.sub,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		leaveReview(formData);
	};

	return (
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
			<button type="submit">SUBMIT</button>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 10rem;
	justify-content: center;
	margin: 2rem;
`;

export { ReviewForm };
