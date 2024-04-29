import styled from "styled-components"
import {FaAlignLeft, FaUserCircle} from "react-icons/fa"

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    color: ${({theme}) => theme.text_primary};
    background: ${({theme}) => theme.bgLight};
    box-shadow: 2 2 10 10px rgba(0, 0, 0, 0.5);
    @media screen and (min-width: 768px) {
        padding: 12px 80px
    }
`;
const MenuLogo = styled.span`
    cursor: pointer;
    color: ${({theme}) => theme.primary};
    font-size: 24px;
`;
const Button = styled.a`
    font-size: 14px;
    cursor: pointer;
    max-width: 70px;
    color: ${({theme}) => theme.primary};
    display: flex;
    align-items: center;
    border: 1px solid ${({theme}) => theme.primary};
    border-radius: 12px;
    padding: 8px 12px;
    gap: 8px;
`;

export default function Navbar({menuOpen, setMenuOpen}) {
  return <Nav>
    <MenuLogo onClick={() => setMenuOpen(!menuOpen)}>
        <FaAlignLeft/>
    </MenuLogo>
    <Button to="/login">
        <FaUserCircle/>
        Login
    </Button>
  </Nav>
}
