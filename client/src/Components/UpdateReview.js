import { styled } from 'styled-components';
import { useState } from 'react';

const UpdateReview = () => {
	const [updatedFormData, setUpdatedFormData] = useState({
		message: '',
		email: '',
	});

	const sendUpdatedReview = async (formData) => {
		await fetch('/api/review/update', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				formData,
			}),
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		sendUpdatedReview(updatedFormData);
	};
	const handleChange = (e) => {
		setUpdatedFormData({
			...updatedFormData,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<ButtonContainer>
			<Form onSubmit={handleSubmit}>
				<h2>Edit/Delete Your Review!</h2>
				<label>Updated Message:</label>
				<textarea
					type="text"
					name="message"
					value={updatedFormData.message}
					onChange={handleChange}
				></textarea>
				<label>Email Used:</label>
				<input
					type="email"
					name="email"
					value={updatedFormData.email}
					onChange={handleChange}
				></input>
				<button type="submit">UPDATE</button>
				<button type="submit">DELETE</button>
			</Form>
		</ButtonContainer>
	);
};

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 10rem;
	margin: 2rem;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 10rem;
	justify-content: center;
	margin: 2rem;
`;

export { UpdateReview };
