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
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollDown = () => {
    window.scroll(0, document.body.scrollHeight);
  };

  return (
    <>
      <div className="title-section">
        <MainHeader>{"Happy Birthday, " + name}</MainHeader>
        <Button onClickButton={scrollDown}>Scroll down</Button>
      </div>
      <div className="images">
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
      <div className="images">
        <Images
          fileNames={[defaultImage]}
          altNames={["The last default image"]}
        >
          My subheader text goes here
        </Images>
      </div>
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
        <Button onClickButton={scrollTop}>Scroll back up</Button>
      </footer>
    </>
  );
}

export default App;
