import styled from 'styled-components';
import React from 'react';

const StyledFooter = styled.footer`
    position: fixed;;
    font-size: .95em;
    right: 0;
    left: 0;
    bottom: 0;
    text-align: center;
    background-color: #1f246e;
    color: white;
`;

const StyledLink = styled.a`
    position: absolute:
    top: 30;
    text-align: center;
    color: white;
`;

export default class Footer extends React.Component {
    render() {
        return (
            <StyledFooter>
                Site coded by Keegan O'Hara
                <br></br>
                    <StyledLink href="https://github.com/Eddy-Irish">
                        GitHub
                    </StyledLink>
            </StyledFooter>
        )
    }
}