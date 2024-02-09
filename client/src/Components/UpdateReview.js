import { styled } from 'styled-components';
import { useState } from 'react';

const UpdateReview = ({ user }) => {
	const [updatedFormData, setUpdatedFormData] = useState({});

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
		setUpdatedFormData({
			...updatedFormData,
			user: user.sub,
		});
		console.log(updatedFormData);
		// sendUpdatedReview(updatedFormData);
		alert('Submitted!');
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
				<h2>Edit Your Review:</h2>
				<label>Updated Message:</label>
				<textarea
					required
					type="text"
					name="message"
					value={updatedFormData.message}
					onChange={handleChange}
				></textarea>

				<button type="submit">UPDATE</button>
				<h2>Delete:</h2>
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
