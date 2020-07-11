import React from 'react'
import styled from '@emotion/styled'

const FormStyled = styled.section`
	margin: 5.5em auto 5em;
	width: 90%;
	.form {
		width: 100%;
		background-color: var(--darkViolet);
		background-image: url('images/bg-shorten-mobile.svg');
		display: flex;
		flex-direction: column;
		margin: auto;
		padding: 1.5rem;
		background-repeat: no-repeat;
		background-position: 100% 0;
		background-size: 70%;
		border-radius: 0.625em;
		input {
			border: 2px solid transparent;
			border-radius: 0.313em;
			padding: 0.6em 2em 0.6em 1em;
			color: var(--grayishViolet);
			font-size: 1.125rem;
			margin-bottom: 1em;
			&::placeholder {
				color: var(--grayishViolet);
			}
		}
		button {
			border: 2px solid transparent;
			border-radius: 0.313em;
			padding: 0.6em 1em;
			font-size: 1.125rem;
			color: white;
			background-color: var(--cyan);
			font-weight: 700;
		}
	}
`

function Form() {
	return (
		<FormStyled>
			<div className="form">
				<input
					type="url"
					name="url"
					id="url"
					placeholder="Shorten a link here..."
				/>
				<button>Shorten It!</button>
			</div>
		</FormStyled>
	)
}

export default Form
