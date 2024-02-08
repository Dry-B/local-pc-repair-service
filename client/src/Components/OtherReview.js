import { styled } from 'styled-components';

const OtherReview = ({ reviewData, key }) => {
	return (
		<li>
			<Wrapper>
				<p>Name: {reviewData[0].Name}</p>
				<p>Message: {reviewData[0].Message}</p>
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
