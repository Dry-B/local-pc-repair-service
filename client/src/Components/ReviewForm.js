import { styled } from 'styled-components';
import { useState } from 'react';

const ReviewForm = ({ user }) => {
	const [formData, setFormData] = useState({});

	const leaveReview = async (formData) => {
		await fetch('/api/review', {
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
		setFormData({
			...formData,
			user: user.sub,
		});
		leaveReview(formData);
		alert('Submitted!');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<h2>Leave A Review!</h2>
			<label>Message:</label>
			<textarea
				required
				type="text"
				name="message"
				value={formData.message}
				onChange={handleChange}
			></textarea>
			<label>Name:</label>
			<input
				required
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
