import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Form from './components/Form'
import Card from './components/Card'

const App = () => {
	const [url, setUrl] = useState('')
	const [error, setError] = useState('')
	const [cards, setCards] = useState(() => {
		const localData = localStorage.getItem('cards')
		return localData ? JSON.parse(localData) : []
	})

	useEffect(() => {
		localStorage.setItem('cards', JSON.stringify(cards))
	}, [cards])

	function isValid(url) {
		// eslint-disable-next-line
		const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
		const result = url.match(regex)
		if (result) {
			return true
		}
		return false
	}

	const shorten = () => {
		if (!isValid(url)) {
			return setError('Please add a link')
		}

		fetch('https://rel.ink/api/links/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ url: url }),
		})
			.then((response) => response.json())
			.then((json) => setCards([...cards, { url, hashId: json.hashid }]))

		return setUrl('')
	}

	const inputValue = (e) => {
		setUrl(e.target.value)
		if (e.target.value) {
			setError('')
		}
	}

	return (
		<>
			<Header />
			<Hero />
			<Form
				url={url}
				handleChange={inputValue}
				handleClick={shorten}
				error={error}
			/>
			{cards.map((card, index) => (
				<Card key={index} card={card} />
			))}
		</>
	)
}

export default App
