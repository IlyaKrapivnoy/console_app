import styled from 'styled-components';
import Button from './components/Button';
import Console from './components/Console';
import Flex from './components/Flex';
import Title from './components/Title';

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background: black;
`;

function App() {
    return (
        <AppWrapper>
            <Flex justify='center'>
                <Title color={'green'}>Test</Title>
            </Flex>
            <Flex direction='column'>
                <Console />
                <Button color={'green'} align='flex-end'>
                    Send Request
                </Button>
            </Flex>
        </AppWrapper>
    );
}

export default App;
