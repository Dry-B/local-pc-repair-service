import { styled } from 'styled-components';

const LeaveReview = () => {
	return (
		<Wrapper id="leavereview">
			<div>Leave a Review Here</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { LeaveReview };
