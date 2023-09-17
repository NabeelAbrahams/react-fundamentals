import "./App.css";
import Hello from "./components/Hello";
import JSXVariables from "./components/JSXVariables";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Section />
      <Hello />
      <JSXVariables />
    </>
  );
}

export default App;
