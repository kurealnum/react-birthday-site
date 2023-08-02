import "./App.css";
import MainHeader from "./components/MainHeader";
import Button from "./components/Button";
import Image from "./components/Image";
import SubHeader from "./components/SubHeader";

//asset imports
import defaultImage from "./assets/defaultImage.jpg";

function App() {
  //images
  const images = [defaultImage, defaultImage, defaultImage];
  const altNames = [
    "A smiley face",
    "Another smiley face",
    "Yet another smiley face",
  ];

  // temp function
  const tempFunc = () => {
    console.log("Hello World");
  };

  return (
    <>
      <MainHeader>My main Header</MainHeader>
      <Button onClickButton={tempFunc}>Scroll down</Button>
      <Image fileNames={images} altNames={altNames}></Image>
      <SubHeader>My image subheader</SubHeader>
    </>
  );
}

export default App;
