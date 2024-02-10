import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const GetEstimate = () => {
	const { user } = useAuth0();
	const [photo, setPhoto] = useState(null);
	const [formData, setFormData] = useState({
		message: '',
		id: user.sub,
	});
	useEffect(() => {
		fetch(
			`/api/photo/a-man-sitting-at-a-table-using-a-laptop-computer-RHbaDtQL6qU`
		)
			.then((res) => res.json())
			.then((data) => setPhoto(data))
			.catch((err) =>
				console.error('Error fetching photos:', err)
			);
	}, []);
	const sendEstimate = async (formData) => {
		await fetch('/api/estimate', {
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
		sendEstimate(formData);
		alert('Submitted!');
		window.location.reload();
	};

	return (
		<Wrapper id="getestimate">
			<Container>
				<Form onSubmit={handleSubmit}>
					<h2>How can we help?</h2>
					<label>Describe the issue:</label>
					<textarea
						type="text"
						name="message"
						value={formData.message}
						onChange={handleChange}
					></textarea>

					<button type="submit">SUBMIT</button>
				</Form>
				<FormPhoto>
					{photo && (
						<BackgroundImage
							key={photo.id}
							src={photo.urls.full}
						/>
					)}
				</FormPhoto>
			</Container>
		</Wrapper>
	);
};

const BackgroundImage = styled.img`
	width: 30rem;
`;
const FormPhoto = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 10rem;
	justify-content: center;
	margin: 2rem;
`;
const Container = styled.div`
	border: solid black 0.1rem;
	height: 80%;
	width: 70%;
	box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { GetEstimate };
