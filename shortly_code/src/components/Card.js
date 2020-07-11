import React, { useState } from 'react'
import styled from '@emotion/styled'

const CardStyled = styled.div`
	margin: 1.5em auto 0em;
	width: 90%;
	border-radius: 0.313em;
	background-color: white;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	text-align: left;
	max-width: 720px;
	.card-link {
		color: var(--veryDarkBlue);
		padding-bottom: 1em;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.card-line {
		content: ' ';
		margin: 0 -1em;
		max-width: 720px;
		height: 1px;
		background-color: var(--grayLight);
	}
	.card-url {
		color: var(--cyan);
		padding-top: 1em;
		padding-bottom: 1em;
	}
	button {
		border: 2px solid transparent;
		border-radius: 0.313em;
		padding: 0.4em 1em;
		font-size: 1.125rem;
		color: white;
		background-color: var(--cyan);
		font-weight: 700;
		outline: none;
		&.btn-clicked {
			background-color: var(--darkViolet);
		}
	}
`

function Card({ card }) {
	const [copied, setCopied] = useState(false)

	const handleCopy = () => {
		setCopied(true)
		navigator.clipboard.writeText(`https://rel.ink/${card.hashId}`)
	}

	return (
		<CardStyled>
			<p className="card-link">{card.url}</p>
			<div className="card-line"></div>
			<p className="card-url">{`https://rel.ink/${card.hashId}`}</p>
			<button
				onClick={handleCopy}
				className={`btn-copy ${copied && 'btn-clicked'}`}
				type="submit"
			>
				{copied ? 'Copied' : 'Copy'}
			</button>
		</CardStyled>
	)
}

export default Card
