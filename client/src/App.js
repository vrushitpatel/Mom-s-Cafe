import { CssBaseline, ThemeProvider } from "@mui/material"; // CssBaseline - Resets the CSS, ThemeProvider - To set up Material UI
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react"; // To initialize the MUI Theme
import { useSelector } from "react-redux"; // For Redux Store
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"; // For Routing and Navigating in the Website
import { themeSettings } from "theme"; // Imports the Theme We Created

function App() {
  const theme = useMemo(() => createTheme(themeSettings()));

  return (
    <div className="App">
      <BrowserRouter>
        {/* Mention the THEME of the website */}
        <ThemeProvider theme={theme}>
          {/* CssBasline just Resets the CSS */}
          <CssBaseline />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
