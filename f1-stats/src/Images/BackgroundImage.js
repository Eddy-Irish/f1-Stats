import styled from 'styled-components';
import React from 'react';

// ** Need to figure out if I can properly place the image behind the body of the page
// So far, everywhere I've tried putting it in App.js's return() results in the image
// being BETWEEN the elements of the page, and not BEHIND them.
//
// I'm sure there's a way to do it, just gotta figure it out next time I work on this.

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