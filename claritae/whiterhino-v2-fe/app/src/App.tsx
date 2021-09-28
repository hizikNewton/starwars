import "./App.css";
import withProviders from "./context/providers";
import { useInitApp } from "./context/providers/hooks";

const App = withProviders(() => {
  useInitApp();
  return <div>{"App"}</div>;
});

export default App;
