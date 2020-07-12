import React from 'react'
import styled from '@emotion/styled'

const HamburgerStyled = styled.div`
	width: 1.5em;
	height: 1.313em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	span {
		position: relative;
		width: 100%;
		height: 3px;
		background-color: var(--grayishViolet);
	}
	@media screen and (min-width: 1120px) {
		display: none;
	}
`

function Hamburger() {
	function handleClick() {
		document.querySelector('nav').classList.toggle('active')
	}
	return (
		<HamburgerStyled onClick={handleClick}>
			<span></span>
			<span></span>
			<span></span>
		</HamburgerStyled>
	)
}

export default Hamburger
