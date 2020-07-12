import React from 'react'
import styled from '@emotion/styled'

const InfoStyled = styled.section`
	margin: 5em auto 1em;
	width: 90%;
	text-align: center;
	.info {
		margin-bottom: 6em;
	}
	h2 {
		font-size: 1.75rem;
		margin-bottom: 1em;
		color: var(--veryDarkBlue);
	}
	h3 {
		font-size: 1.375rem;
		color: var(--veryDarkBlue);
	}
	p {
		font-size: 1rem;
		color: var(--grayishViolet);
	}
	.cards-info {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 5.75em;
		.card {
			position: relative;
			background-color: white;
			padding: 4.813em 2.2em 2.2em;
			border-radius: 0.313em;
			&:nth-child(2) {
				&::before {
					content: '';
					width: 0.5em;
					height: 3em;
					background-color: var(--cyan);
					position: absolute;
					top: -92px;
					left: 50%;
					transform: translateX(-50%);
				}
				&::after {
					content: '';
					width: 0.5em;
					height: 3em;
					background-color: var(--cyan);
					position: absolute;
					bottom: -3em;
					left: 50%;
					transform: translateX(-50%);
				}
			}
			.image {
				width: 5.5em;
				height: 5.5em;
				border-radius: 100%;
				background-color: var(--darkViolet);
				display: grid;
				place-items: center;
				position: absolute;
				top: 0;
				left: 50%;
				transform: translate(-50%, -50%);
			}
			p {
				font-size: 0.938rem;
				margin-top: 1em;
			}
		}
	}
`

function Info() {
	return (
		<InfoStyled>
			<div className="info">
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<div className="cards-info">
				<div className="card">
					<div className="image">
						<img src="images/icon-brand-recognition.svg" alt="icon" />
					</div>
					<h3>Brand Recognition</h3>
					<p>
						Boost your brand recognition with each click. Generic links don’t
						mean a thing. Branded links help instil confidence in your content.
					</p>
				</div>
				<div className="card">
					<div className="image">
						<img src="images/icon-detailed-records.svg" alt="icon" />
					</div>
					<h3>Detailed Records</h3>
					<p>
						Gain insights into who is clicking your links. Knowing when and
						where people engage with your content helps inform better decisions.
					</p>
				</div>
				<div className="card">
					<div className="image">
						<img src="images/icon-fully-customizable.svg" alt="icon" />
					</div>
					<h3>Fully Customizable</h3>
					<p>
						Improve brand awareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</div>
			</div>
		</InfoStyled>
	)
}

export default Info
