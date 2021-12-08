import { ThemeProvider } from '@material-ui/styles'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
// Redux
import { PersistGate } from 'redux-persist/integration/react'
import './App.css'
import { persistor, store } from './redux/store'
import RoutesApp from './routes/Routes'
import theme from './theme/theme'

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<HelmetProvider>
					<ThemeProvider theme={theme}>
						<div className="App">
							<Router>
								<RoutesApp />
							</Router>
						</div>
					</ThemeProvider>
				</HelmetProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
