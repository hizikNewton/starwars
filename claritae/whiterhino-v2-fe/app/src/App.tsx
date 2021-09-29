import "./App.css";
import { PRIMARY_THEME_COLOR, SECONDARY_THEME_COLOR } from "./constants/common";
import withProviders from "./contexts/providers";
import { useInitApp } from "./contexts/providers/hooks";
import styled, { ThemeProvider } from "styled-components";
import Routers from "./routes";

const Theme = {
  primary: PRIMARY_THEME_COLOR,
  secondary: SECONDARY_THEME_COLOR,
};

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = withProviders(() => {
  useInitApp();
  return (
    <ThemeProvider theme={Theme}>
      <AppDiv>
        <Routers />
      </AppDiv>
    </ThemeProvider>
  );
});

export default App;
