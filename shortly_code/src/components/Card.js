import React, { useState } from 'react'
import styled from '@emotion/styled'

const CardStyled = styled.div``

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
				{copied ? 'copied' : 'copy'}
			</button>
		</CardStyled>
	)
}

export default Card
