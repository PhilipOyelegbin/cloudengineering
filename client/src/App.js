import {useState} from'react';
import styled, {ThemeProvider} from'styled-components';
import {BrowserRouter, Route, Routes} from'react-router-dom';
import {darkTheme, lightTheme} from './utils/Themes'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Favourites from './pages/Favourites';
import Search from './pages/Search';

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen && <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setDarkMode={setDarkMode} darkMode={darkMode}/>}
          <Frame>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Routes>
              <Route path="/" exact element={<Dashboard/>}/>
              <Route path="/favourites" element={<Favourites/>}/>
              <Route path="/search" element={<Search/>}/>
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
