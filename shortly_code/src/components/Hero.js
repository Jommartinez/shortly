import React from 'react'
import styled from '@emotion/styled'

const HeroStyled = styled.section`
	margin-left: 1.5em;
	overflow: hidden;
	img {
		width: 31em;
	}
`
const ContainerStyled = styled.div`
	padding-top: 2.313em;
	text-align: center;
	margin-right: 1.5em;
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		color: var(--veryDarkBlue);
		font-size: 2.625rem;
		line-height: 3rem;
		padding-bottom: 0.4em;
	}
	p {
		color: var(--grayishViolet);
		font-size: 1.125rem;
		line-height: 1.875rem;
		padding-bottom: 2em;
	}
	button {
		color: white;
		background-color: var(--cyan);
		width: auto;
		display: block;
		border: none;
		padding: 0.75em 2.5em;
		font-size: 1.125rem;
		border-radius: 1.75em;
	}
`

function Hero() {
	return (
		<HeroStyled>
			<img src="images/illustration-working.svg" alt="illustration" />
			<ContainerStyled>
				<h1>More than just shorter links</h1>
				<p>
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<button>Get Started</button>
			</ContainerStyled>
		</HeroStyled>
	)
}

export default Hero
