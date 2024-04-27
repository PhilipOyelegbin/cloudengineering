import {useState} from'react';
import styled, {ThemeProvider} from'styled-components';
import {BrowserRouter} from'react-router-dom';
import {darkTheme, lightTheme} from './utils/Themes'
import Sidebar from './components/Sidebar';

const Container = styled.article`
  display: flex;
  background-color: ${({theme}) => theme.bgLight};
  width: 100%;
  height: 100svh;
  overflow: hidden;
`;
const Frame = styled.section`
  display: flex;
  flex-flow: column;  
  flex: 3;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          <Sidebar setMenuOpen={setMenuOpen} setDarkMode={setDarkMode} darkMode={darkMode}/>
          <Frame>Podrium</Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
