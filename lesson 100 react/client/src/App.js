import "./App.css";
// import SetCounter from "./components/SetCounter";
// import AboutPage from "./pages/AboutPage";
// import Cards from "./cards/components/Cards";
// import CardsPage from "./pages/CardsPage";
// import SandBoxCard from "./sandbox/SandBoxCard";
// import PageHeader from './components/PageHeader';
// import StylesComponents from './sandbox/components/StylesComponents';
// import CardComponent from './cards/components/card/card';
// import MuiComponent from './sandbox/components/MuiComponents';
import SandBox from "./sandbox/SandBox";

function App() {
  document.body.style = "background: #b3ecfa;";
  return (
    <div className="App">
      {/* <PageHeader />
      <StylesComponents />
      <MuiComponent /> */}
      {/* <CardComponent /> */}
      <SandBox />
      {/* <SandBoxCard/> */}
      {/* <CardsPage /> */}
      {/* <AboutPage /> */}
      {/* <Cards /> */}
      {/* <SetCounter /> */}
    </div>
  );
}

export default App;
