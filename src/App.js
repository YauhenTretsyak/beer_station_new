import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import SwitchContextProvider from './context/SwitchContext';
import GlobalStyle from './styles/GlobalStyle';
import { MainPage } from './pages';
import { HelmetProvider } from 'react-helmet-async';
import { HelmetBlock } from './blocks/index';


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
            // faviconUrl={ favicon }
          />
          <MainPage />
        </SwitchContextProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
