import Home from "./pages/Home";
import ContextBundle from "./context";

function App() {
  return (
    <>
      <ContextBundle>
        <Home />
      </ContextBundle>
    </>
  );
}

export default App;
