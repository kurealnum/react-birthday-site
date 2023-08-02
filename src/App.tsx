//main imports
import "./App.css";
import MainHeader from "./components/MainHeader";
import Button from "./components/Button";
import Images from "./components/ImageCollection";
import InfoContainer from "./components/InfoContainer";

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
      <div className="title-section">
        <MainHeader>My main Header</MainHeader>
        <Button onClickButton={tempFunc}>Scroll down</Button>
      </div>
      <Images fileNames={images} altNames={altNames}>
        My subheader text goes here
      </Images>
      <InfoContainer title="My Container">
        Some text that would go in my container. Blah blah blah.
      </InfoContainer>
      <Images fileNames={[defaultImage]} altNames={["The last default image"]}>
        My subheader text goes here
      </Images>
      <InfoContainer title="Another container">
        Some text that would go in my container. Blah blah blah.
      </InfoContainer>
      <footer>
        <MainHeader>My footer header</MainHeader>
        <p>Some footer text!</p>
        <Button onClickButton={tempFunc}>Scroll back up</Button>
      </footer>
    </>
  );
}

export default App;
