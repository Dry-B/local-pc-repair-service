import { styled } from 'styled-components';

const OtherReview = ({ reviewData }) => {
	return (
		<>
			<Wrapper>
				<p>Name: {reviewData[0].Name}</p>
				<p>Message: {reviewData[0].Message}</p>
			</Wrapper>
		</>
	);
};
const Wrapper = styled.div`
	margin: 1rem;
	padding: 10px;
	border: solid black 1px;
`;

export { OtherReview };
