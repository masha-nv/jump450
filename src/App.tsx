import Ad from "./components/home/Ad/Ad";
import Form from "./components/home/Form/Form";
import Layout from "./shared/components/Layout/Layout";
import SplitScreen from "./shared/components/SplitScreen/SplitScreen";
import "./App.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-PBCTSGHGNQ");
ReactGA.send({
  hitType: "pageview",
  page: "window.location.pathname",
});

function App() {
  return (
    <Layout>
      <SplitScreen left={<Ad />} right={<Form />} />
    </Layout>
  );
}

export default App;
