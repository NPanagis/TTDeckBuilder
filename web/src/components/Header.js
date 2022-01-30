import styled from 'styled-components';
import { Link } from "react-router-dom";
import {BackgroundColor, SelectedLinkColor} from '../shared/GlobalCss.js';

const Container = styled.div`
    background-color: ${BackgroundColor};
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
`;

const Title = styled.h1`
    color:black;
    font-size: 2.5rem;
`;

const NavBar = styled.nav`
    display: inline-grid;
    grid-template-columns: auto auto auto auto auto;
    align-items: center;
    grid-column-gap: 50px;
`;

const NavItem = styled.li`
    list-style: none;
    font-size: 1.3rem;

    & a {
        text-decoration: none;
        color: black;
    }

    & a:hover {
        background-color: ${SelectedLinkColor};
        color: white;
    }
`;

let Header = () => {

    return (
        <Container>
            <NavBar>
                <NavItem>
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/cards">Cards</Link>
                </NavItem>
                <NavItem>
                    <Link to="/decks">Decks</Link>
                </NavItem>
                <NavItem>
                    <Link to="/rules">Rules</Link>
                </NavItem>
                <NavItem>
                    <Link to="/account">Account</Link>
                </NavItem>
            </NavBar>
            <Title href="#">FFXIV Triple Triad Companion</Title>
        </Container>
    );
};

export default Header;