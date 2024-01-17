import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

const Welcome = () => {
	const [photo, setPhoto] = useState(null);

	useEffect(() => {
		fetch('/api/getUnsplashPhoto')
			.then((res) => res.json())
			.then((data) => setPhoto(data))
			.catch((err) =>
				console.error('Error fetching photos:', err)
			);
	}, []);
	return (
		<Wrapper>
			<BackgroundImageContainer>
				{photo && (
					<BackgroundImage
						key={photo.id}
						src={photo.urls.full}
					/>
				)}
			</BackgroundImageContainer>
			<Container>
				<Title>PC Repairs</Title>
			</Container>
		</Wrapper>
	);
};

const BackgroundImageContainer = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	top: 0;
	background-color: black;
	z-index: -1;
`;
const BackgroundImage = styled.img`
	height: 100%;
	width: 100%;
	z-index: -2;
	opacity: 0.4;
`;
const Title = styled.p`
	font-size: 5rem;
	margin: 0;
	font-family: Poppins;
	color: #ebebeb;
`;

const Container = styled.div`
	width: 20%;
	min-width: 30rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	position: relative;
`;
const Wrapper = styled.div`
	width: 100%;
	height: 50vh;
	padding-bottom: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: end;
	align-items: center;
	margin: 0;
`;

export { Welcome };
