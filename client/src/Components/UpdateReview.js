import { styled } from 'styled-components';
import { useState } from 'react';

const UpdateReview = ({ user }) => {
	const [updatedFormData, setUpdatedFormData] = useState({
		user: user.sub,
	});

	const sendDeleteRequest = () => {
		fetch(`/api/review/delete/${user.sub}`)
			.then((res) => res.json())
			.catch((err) =>
				console.error('Error fetching photos:', err)
			);
	};

const sendUpdatedReview = async (formData) => {
	await fetch('/api/review/update', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			formData,
		}),
	});
};
const handleDelete = () => {
	sendDeleteRequest();
	alert('Deleted!');
};
const handleSubmit = async (e) => {
	e.preventDefault();
	setUpdatedFormData({
		...updatedFormData,
	});
	sendUpdatedReview(updatedFormData);
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
		</Form>
		<Form onSubmit={handleDelete}>
			<h2>Delete Your Review:</h2>
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
