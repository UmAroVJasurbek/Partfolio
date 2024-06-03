import { useLocation } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import RouterController from "./RouterController";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {!pathname.includes("/admin") && !pathname.includes("/login") && <Nav />}
      <RouterController />
      {!pathname.includes("/admin") && !pathname.includes("/login") && (
        <Footer />
      )}
    </>
  );
};

export default App;
