import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Header from './components/Header.js';
import Home from './views/Home.js';
import Cards from "./views/Cards.js";
import Decks from "./views/Decks.js";
import Rules from "./views/Rules.js";
import Account from "./views/Account.js";

const AppBody = styled.div`
  width: 80%;
  margin: auto;
`;

let App = () => {
  return (
    <AppBody>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/cards" element={ <Cards />} />
        <Route path="/decks" element={ <Decks />} />
        <Route path="/rules" element={ <Rules />} />
        <Route path="/account" element={ <Account />} />
      </Routes>

    </AppBody>
  );
};

export default App;
