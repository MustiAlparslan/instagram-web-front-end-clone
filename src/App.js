import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const showRoutes = useRoutes(routes);

  return (
    <>
      <Toaster position="top-right" />
      {showRoutes}
    </>
  );
}

export default App;
