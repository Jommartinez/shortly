import React from 'react'
import styled from '@emotion/styled'

const BannerStyled = styled.section`
	background-color: var(--darkViolet);
	background-image: url('images/bg-boost-mobile.svg');
	text-align: center;
	padding: 5.625em 1.6em;
	margin-top: 4.563em;
	h2 {
		font-size: 1.75rem;
		margin-bottom: 1em;
		color: white;
	}
	a {
		border: 2px solid transparent;
		border-radius: 0.313em;
		padding: 0.6em 1.8em;
		font-size: 1.125rem;
		color: white;
		background-color: var(--cyan);
		font-weight: 700;
		text-decoration: none;
		border-radius: 25px;
	}
`

function Banner() {
	return (
		<BannerStyled>
			<h2>Boost your links today</h2>
			<a href="https://google.es">Get Started</a>
		</BannerStyled>
	)
}

export default Banner
