import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

const LearnMore = () => {
	const [photo, setPhoto] = useState(null);

	useEffect(() => {
		fetch(
			`/api/getUnsplashPhoto/person-holding-black-and-silver-dj-controller-sMKUYIasyDM`
		)
			.then((res) => res.json())
			.then((data) => setPhoto(data))
			.catch((err) =>
				console.error('Error fetching photos:', err)
			);
	}, []);

	return (
		<Wrapper id="learnmore">
			<Container>
				<Example>
					<Text>We Repair Laptops!</Text>
					{photo && (
						<BackgroundImage
							key={photo.id}
							src={photo.urls.full}
						/>
					)}
				</Example>
				<Example>
					<Text>We Repair Desktops!</Text>
					{photo && (
						<BackgroundImage
							key={photo.id}
							src={photo.urls.full}
						/>
					)}
				</Example>
			</Container>
		</Wrapper>
	);
};

const Text = styled.p`
	margin: 2rem;
`;
const BackgroundImage = styled.img`
	width: 30rem;
	margin: 2rem;
`;
const Example = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Container = styled.div`
	border: solid black 0.1rem;
	height: 80%;
	width: 70%;
	box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { LearnMore };
