import styled from 'styled-components';
import React from 'react';

const StyledImage = styled.img`
    width: 100%;
    height: 100px;
    opacity: 0.25;
`;



export default class BackgroundImage extends React.Component {
    render() {
        return (
            <StyledImage src="https://e0.365dm.com/13/08/2048x1152/action-formula-1-grand-prix-atmosphere-belgium-scenic-ayrton-senna-mclaren-spa_2987057.jpg" 
                         alt="Eau Rouge" 
                         width="auto" 
                         height="auto">
            </StyledImage>
        )
    }      
}