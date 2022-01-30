import styled from 'styled-components';
import {BackgroundColor} from '../shared/GlobalCss.js';

const Container = styled.div`
    background-color: ${BackgroundColor};
    margin: auto; 
    display: flex;
    align-items: center;
    flex-direction: column;
`;

let Home = () => {

    return (
        <Container>
            <h1>Welcome to the site! Stay a while and listen!</h1>
            <p>This is a test paragraph.</p>
        </Container>
            
    );
};

export default Home;