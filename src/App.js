import GlobalStyles from "./GlobalStyles";
import Pagination from "./Pagination";
import Slides, { slideLength } from "./Slides";

function App() {
  return (
    <>
      <GlobalStyles />
      <Pagination max={slideLength - 1} />
      <Slides />
    </>
  );
}

export default App;
