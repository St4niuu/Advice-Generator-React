import React from 'react'
import ReactDOM from 'react-dom/client'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import Container from './components/Container'

const theme = {
  lightCyan: 'hsl(193, 38%, 86%)',
  neonGreen: 'hsl(150, 100%, 66%)',
  grayishBlue: 'hsl(217, 19%, 38%)',
  darkGrayishBlue: 'hsl(217, 19%, 24%)',
  darkBlue: 'hsl(218, 23%, 16%)'
}

const GlobalStyle = createGlobalStyle`

  *::before, *::after, * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%
  }
  #root {
    font-size: 28px;
    font-family: 'Manrope', sans-serif;
    background-color: ${props => {return props.theme.darkBlue}};
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-height: 620px) {
      align-items: flex-start;
    }
  }

`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />)