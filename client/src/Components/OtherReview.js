import { styled } from 'styled-components';

const OtherReview = ({ reviewData }) => {
	return (
		<li key={reviewData.name}>
			<Wrapper>
				<p>Name: {reviewData.name}</p>
				<p>Message: {reviewData.message}</p>
			</Wrapper>
		</li>
	);
};

const Wrapper = styled.div`
	margin: 1rem;
	padding: 10px;
	border: solid black 1px;
`;

export { OtherReview };
