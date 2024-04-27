import styled from 'styled-components'
import LogoImage from '../images/Logo.png'
import { Link } from 'react-router-dom';

const MenuContainer = styled.aside`
  flex: 0.5;
  flex-direction: column;
  height: 100svh;
  display: flex;
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  // @media screen and (max-width: 1100px) {
  //   position: fixed;
  //   z-index: 1000;
  //   width: 100%;
  //   max-width: 250px;
  //   left: ${({setMenuOpen}) => (setMenuOpen ? "0" : "-100%")};
  //   transition: 0.3s ease-in-out;
  // }
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.h3`
  color: ${({theme}) => theme.primary};
  display: flex;
  align-items: center;
  jsutify-content: center;
  gap: 8px;
  font-size: 20px;
  margin: 16px 0;
  width: 100%;  
`;
const Image = styled.img`
  height: 40px;
`;
const Close = styled.h3`
  display: none;
  @media screen and (max-width: 1100px) {
    display: block;
  }
`;
const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({theme}) => theme.text_secondary};
  &:hover {
    color: ${({theme}) => theme.text_primary};
    background-color: ${({theme}) => theme.text_secondary};
  }
`;
const NavText = styled.h5`
  padding: 8px 0;
`;
const HR = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.text_secondary};
  margin: 8px 0;
`;

const MenuItems = [
  {link: "/", name: "Dashboard"},
  {link: "/search", name: "Search"},
  {link: "/favourites", name: "Favourites"}
]


export default function Sidebar({setMenuOpen, setDarkMode, darkMode}) {
  const Buttons = [
    {func: ()=> console.log("Upload"), name: "Upload"},
    {func: ()=> setDarkMode(prev => !prev), name: darkMode ? "Light Mode" : "Dark Mode"},
    {func: ()=> console.log("Bye"), name: "Log Out"}
  ]
  
  return <MenuContainer>
    <Flex>
      <Logo>
        <Image src={LogoImage} />
        Podrium
      </Logo>
      <Close>&times;</Close>
    </Flex>

    {MenuItems?.map((item, index) => 
      <Link to={item.link} key={index} style={{textDecoration: "none"}}>
        <Elements>
          <NavText>{item.name}</NavText>
        </Elements>
      </Link>
    )}

    <HR />

    {Buttons?.map((item, index) => 
      <Elements onClick={item.func} key={index}>
        <NavText>{item.name}</NavText>
      </Elements>
    )}
  </MenuContainer>
}
