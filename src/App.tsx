import Ad from "./components/home/Ad/Ad";
import Form from "./components/home/Form/Form";
import SplitScreen from "./shared/components/SplitScreen/SplitScreen";
import "./App.css";
import ReactGA from "react-ga4";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./components/confirmation/Confirmation";

ReactGA.initialize("G-PBCTSGHGNQ");
ReactGA.send({
  hitType: "pageview",
  page: "window.location.pathname",
});

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<SplitScreen left={<Ad />} right={<Form />} />}></Route>
      <Route path='/confirmation' element={<Confirmation />}></Route>
    </Routes>
  );
}

export default App;
