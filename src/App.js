import { GlobalStyle } from "./global/style";
import Routers from "./routes/index";
import WorkProvid from "./context/WorkContext";

function App() {
  return (
    <div>
      <GlobalStyle />
      <WorkProvid>
        <Routers />
      </WorkProvid>
    </div>
  );
}

export default App;
