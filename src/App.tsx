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

  //change this to the receivers name
  const name = "Name";

  // temp function
  const tempFunc = () => {
    console.log("Hello World");
  };

  return (
    <>
      <div className="title-section">
        <MainHeader>{"Happy Birthday, " + name}</MainHeader>
        <Button onClickButton={tempFunc}>Scroll down</Button>
      </div>
      <div className="top-images">
        <Images fileNames={images} altNames={altNames}>
          Subheading goes here. Lorem Ipsum is simply du
        </Images>
      </div>
      <InfoContainer title="My Container">
        Some information would go here: Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries,
      </InfoContainer>
      <Images fileNames={[defaultImage]} altNames={["The last default image"]}>
        My subheader text goes here
      </Images>
      <InfoContainer title="Another container">
        Some information would go here: Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries,
      </InfoContainer>
      <footer>
        <MainHeader>My footer header</MainHeader>
        <p>
          Some information would go here: Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries,{" "}
        </p>
        <Button onClickButton={tempFunc}>Scroll back up</Button>
      </footer>
    </>
  );
}

export default App;
