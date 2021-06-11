import React from "react"
import {defaultTheme, GlobalStyle} from "./globalStyles";
import { ThemeProvider } from 'styled-components';
import Routers from './routes'

const App:React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Routers />
     </ThemeProvider>
  )
}

export default App

