import styled from "styled-components";
import Contactlist from "./components/Contactlist";
import Conversation from "./components/Conversation";
const Container = styled.div`
display:flex;
flex-direction:row;
height:100vh;
with:100%

`;
const App = () => {
    return (
        <Container>
        <Contactlist />
        <Conversation />           
        </Container>
    );
}

export default App;
