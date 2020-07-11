import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Form from './components/Form'
import Title from './components/Title'

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Form />
			<Title title="Hola" />
		</>
	)
}

export default App
