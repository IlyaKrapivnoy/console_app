import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';

const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    background: black;
    font-size: 24px;
    border: none;
    color: ${({ color }) => color || 'white'};
    resize: none;
    &:focus {
        outline: none;
    }
`;

const Console = ({ color, ...props }) => {
    const [lines, setLines] = useState(['C/users/ILYA_K>']);
    return (
        <Flex>
            <Flex direction={'column'} margin='0 10px'>
                {lines.map((line) => (
                    <Line color={color}>{line}</Line>
                ))}
            </Flex>
            <StyledConsole color={color} {...props} />
        </Flex>
    );
};

export default Console;
