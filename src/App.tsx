import "./App.css";
import MainHeader from "./components/MainHeader";
import Button from "./components/Button";
import Image from "./components/Image";

//asset imports
import defaultImage from "./assets/defaultImage.jpg";

function App() {
  // temp function
  const tempFunc = () => {
    console.log("Hello World");
  };

  return (
    <>
      <MainHeader>My main Header</MainHeader>
      <Button onClickButton={tempFunc}>Scroll down</Button>
      <Image fileName={defaultImage} altName="Smiley face image"></Image>
    </>
  );
}

export default App;
