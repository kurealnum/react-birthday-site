interface Props {
  fileNames: string[];
  altNames: string[];
}

const Image = ({ fileNames, altNames }: Props) => {
  return (
    <>
      {fileNames.map((item, index) => (
        <img src={item} alt={altNames[index]} key={index}></img>
      ))}
    </>
  );
};

export default Image;
