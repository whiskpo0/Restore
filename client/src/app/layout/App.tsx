
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import React, { useState } from "react";
import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {  

  const [darkMode, setDarkMode] = useState(false); 
  const paletteType = darkMode ? 'dark' : 'light'; 
  const theme = createTheme({
    palette: { 
      mode: paletteType, 
      background: { 
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() { 
    setDarkMode(!darkMode); 
  }

  return (
    <React.Fragment>   
      <ThemeProvider theme={theme}>

      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>

      <Container>
        <Outlet />         
      </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
