import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import SwitchContextProvider from './context/SwitchContext';
import GlobalStyle from './styles/GlobalStyle';
import { MainPage } from './pages';

function App() {
  return (
    <ThemeProvider theme={ theme } > 
      <SwitchContextProvider>
        <GlobalStyle /> 
        <MainPage />
      </SwitchContextProvider>
    </ThemeProvider>
  );
}

export default App;
