import React from 'react'
import styled from '@emotion/styled'
import Nav from './Nav'
import Hamburger from './Hamburger'

const HeaderStyled = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	margin: 2.3em auto 1em;
	width: 90%;
	max-width: 1108px;
	.logo {
		@media screen and (min-width: 1120px) {
			display: flex;
			align-items: center;
		}
	}
`

function Header() {
	return (
		<HeaderStyled>
			<div className="logo">
				<img src="images/logo.svg" alt="" />
			</div>
			<Hamburger />
			<Nav />
		</HeaderStyled>
	)
}

export default Header
