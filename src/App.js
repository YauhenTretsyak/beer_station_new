/* eslint-disable react/react-in-jsx-scope */
import {HelmetProvider} from 'react-helmet-async'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import {Routes, Route} from 'react-router-dom'
import {theme} from './styles/theme'
import {HelmetBlock} from './common-components/index'
import {MainPage, BeerCardPage} from './pages'
import {Footer} from './components/'
import {AdminPanelMainPage} from './adminPanelComponents'
import favicon from './assets/favicon.png'

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider theme={ theme } > 
                <GlobalStyle /> 
                <HelmetBlock
                    title="BeerStation"
                    name="BeerStation"
                    content="beer"
                    description="beerstation"
                    faviconUrl={ favicon }
                />
                <Routes>
                    <Route path="/" element={ <MainPage /> } />
                    <Route path="/beer_page" element={ <BeerCardPage /> }>
                        <Route path=":location/:id" element={ <BeerCardPage /> } />
                    </Route>
                    <Route path="/admin" element={ <AdminPanelMainPage /> } />
                </Routes>
                <Footer />
            </ThemeProvider>
        </HelmetProvider>
    )
}

export default App
