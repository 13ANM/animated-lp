import React from 'react'
import Hero from './components/Hero'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import { theme } from './theme/theme'

const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Hero />
	</ThemeProvider>
)

export default App
