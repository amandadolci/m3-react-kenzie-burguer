import styled from 'styled-components';

export const StyledCard = styled.li`
	min-width: 18.75rem;
	height: 21.625rem;
	border: 2px solid var(--grey-20);
	border-radius: var(--radius-5);

	:hover {
		border: 2px solid var(--grey-100);
	}

	figure {
		width: 100%;
		height: 9.375rem;
		background-color: var(--grey-0);
		border-radius: var(--radius-5) var(--radius-5) 0 0;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			height: 9.375rem;
			object-fit: cover;
			object-position: bottom;
		}

		.imageMedium {
			width: 10.125rem;
			margin-bottom: 0.5rem;
		}

		.imageBig {
			width: 15.4375rem;
			margin-top: 1.875rem;
		}
	}

	div {
		width: 100%;
		height: 12.25rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		padding: 1.3438rem 1.1875rem;

		h2 {
			font-size: 1.125rem;
		}
		small {
			font-size: 0.75rem;
			color: var(--grey-50);
		}
		h3 {
			font-size: 0.875rem;
			color: var(--color-primary);
		}
	}
`;
