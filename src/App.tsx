import "./App.css";
import MainHeader from "./components/MainHeader";
import Button from "./components/Button";

function App() {
  // temp function
  const tempFunc = () => {
    console.log("Hello World");
  };

  return (
    <>
      <MainHeader>My main Header</MainHeader>
      <Button onClickButton={tempFunc}>Scroll down</Button>
    </>
  );
}

export default App;
