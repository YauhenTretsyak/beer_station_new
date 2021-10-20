import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { MainPage } from './pages';

function App() {
  return (
    <ThemeProvider theme={ theme } >
      <GlobalStyle /> 
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
