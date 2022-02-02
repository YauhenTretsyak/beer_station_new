import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import SwitchContextProvider from './hoc/SwitchContext';
import GlobalStyle from './styles/GlobalStyle';
import { Header, Footer } from './components/'
import { MainPage, BeerCardPage } from './pages';
import { HelmetProvider } from 'react-helmet-async';
import { HelmetBlock } from './blocks/index';
import { Routes, Route } from "react-router-dom";
import favicon from './assets/favicon.png';


function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={ theme } > 
        <SwitchContextProvider>
          <GlobalStyle /> 
          <HelmetBlock
            title={ 'BeerStation' }
            name={ 'BeerStation' }
            content={ 'beer' }
            description='beerstation'
            faviconUrl={ favicon }
          />
          {/* <Header /> */}
          <Routes>
            <Route path='/' element={ <MainPage/> } />
            <Route path='/beer_page' element={ <BeerCardPage/> }>
              <Route path=":location/:id" element={ <BeerCardPage/> } />
            </Route>
          </Routes>
          <Footer />
        </SwitchContextProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
