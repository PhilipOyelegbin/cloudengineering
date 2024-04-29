import styled from 'styled-components'
import LogoImage from '../images/Logo.png'
import { Link } from 'react-router-dom';
import { FaCloudDownloadAlt, FaHeart, FaHome, FaMoon, FaSearch, FaSun, FaTimes } from 'react-icons/fa';

const MenuContainer = styled.aside`
  flex: 0.5;
  flex-direction: column;
  height: 100svh;
  display: flex;
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  @media screen and (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({menuOpen}) => menuOpen ? "-100%" : "0"};
    transition: all 300ms ease-in-out;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`;
const Logo = styled.h3`
  color: ${({theme}) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 20px;
  margin: 16px 0; 
`;
const Image = styled.img`
  height: 40px;
`;
const Close = styled.span`
  display: none;
  @media screen and (max-width: 1100px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;
const Elements = styled.div`
  padding: 4px 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({theme}) => theme.text_secondary};
  &:hover {
    // color: ${({theme}) => theme.text_primary};
    background: ${({theme}) => theme.text_secondary + 50};
  }
`;
const NavText = styled.h5`
  padding: 4px 0;
`;
const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.text_secondary};
  margin: 10px 0px;
`;

const MenuItems = [
  {link: "/", icon: <FaHome/>, name: "Dashboard"},
  {link: "/search", icon: <FaSearch/>, name: "Search"},
  {link: "/favourites", icon: <FaHeart/>, name: "Favourites"}
]


export default function Sidebar({menuOpen, setMenuOpen, setDarkMode, darkMode}) {
  const Buttons = [
    {func: ()=> console.log("Upload"), icon: <FaCloudDownloadAlt/>, name: "Upload"},
    {func: ()=> setDarkMode(!darkMode), icon: darkMode ? <FaSun/> : <FaMoon/>, name: darkMode ? "Light Mode" : "Dark Mode"},
    {func: ()=> console.log("Bye"), icon: <FaSun/>, name: "Log Out"}
  ]
  
  return <MenuContainer>
    <Flex>
      <Logo>
        <Image src={LogoImage} />
        Podrium
      </Logo>
      <Close onClick={() => setMenuOpen(false)}>
        <FaTimes/>
      </Close>
    </Flex>

    {MenuItems?.map((item, index) => 
      <Link to={item.link} key={index} style={{textDecoration: "none"}}>
        <Elements>
          {item.icon}
          <NavText>{item.name}</NavText>
        </Elements>
      </Link>
    )}

    <HR />

    {Buttons?.map((item, index) => 
      <Elements onClick={item.func} key={index}>
        {item.icon}
        <NavText>{item.name}</NavText>
      </Elements>
    )}
  </MenuContainer>
}
