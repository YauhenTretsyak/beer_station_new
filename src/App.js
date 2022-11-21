/* eslint-disable react/react-in-jsx-scope */
import {HelmetProvider} from 'react-helmet-async'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
// import {Routes, Route} from 'react-router-dom'
import {theme} from './styles/theme'
import {HelmetBlock} from './common-components/index'
import {Footer} from './components/'
import {AdminPanelMainPage} from './pages'
import favicon from './assets/favicon.png'

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider theme={theme} > 
                <GlobalStyle /> 
                <HelmetBlock
                    title="BeerStation"
                    name="BeerStation"
                    content="beer"
                    description="beerstation"
                    faviconUrl={favicon}
                />
                <AdminPanelMainPage />
                {/* <Routes>
                    <Route path="/" element={<AdminPanelMainPage /> } />
                    <Route path="/events" element={<></>}>
                        <Route path=":location" element={<></>} />
                    </Route>
                </Routes> */}
                <Footer />
            </ThemeProvider>
        </HelmetProvider>
    )
}

export default App
