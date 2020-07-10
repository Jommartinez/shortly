import React from 'react'
import styled from '@emotion/styled'

const NavStyled = styled.nav`
	display: none;
	position: absolute;
	top: 3.5rem;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2em 1.5em 2.5em;
	background-color: var(--darkViolet);
	border-radius: 0.625em;
	&.active {
		display: flex;
	}
	hr {
		width: 100%;
		height: 1px;
		border: 0;
		margin-bottom: 2em;
		background-color: var(--grayishViolet);
	}
	ul {
		position: relative;
		width: 100%;
		li {
			list-style: none;
			text-align: center;
			a {
				color: white;
				text-decoration: none;
				font-size: 1.125rem;
				margin-bottom: 2em;
				margin-bottom: 2em;
				display: block;
			}
			button {
				color: white;
				background-color: var(--cyan);
				width: 100%;
				display: block;
				border: none;
				padding: 0.75em;
				font-size: 1.125rem;
				border-radius: 1.75em;
			}
		}
	}
`

function Nav() {
	return (
		<NavStyled>
			<ul>
				<li>
					<a href="https://www.google.es">Features</a>
				</li>
				<li>
					<a href="https://www.google.es">Pricing</a>
				</li>
				<li>
					<a href="https://www.google.es">Resources</a>
				</li>
			</ul>
			<hr />
			<ul>
				<li>
					<a href="https://www.google.es">Login</a>
				</li>
				<li>
					<button className="btn" type="button">
						Sign up
					</button>
				</li>
			</ul>
		</NavStyled>
	)
}

export default Nav
