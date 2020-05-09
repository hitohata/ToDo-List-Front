import React from 'react';
import './App.css';
import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme/theme";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
