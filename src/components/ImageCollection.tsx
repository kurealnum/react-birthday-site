interface Props {
  children: string;
  fileNames: string[];
  altNames: string[];
}

const ImageCollection = ({ fileNames, altNames, children }: Props) => {
  return (
    <>
      {fileNames.map((item, index) => (
        <img src={item} alt={altNames[index]} key={index}></img>
      ))}
      <ImageSubHeader>{children}</ImageSubHeader>
    </>
  );
};

//section for the image(s) subheader
interface imageProps {
  children: string;
}

const ImageSubHeader = ({ children }: imageProps) => {
  return <h2>{children}</h2>;
};

export default ImageCollection;
