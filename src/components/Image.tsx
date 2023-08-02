interface Props {
  fileName: string;
  altName: string;
}

const Image = ({ fileName, altName }: Props) => {
  return <img src={fileName} alt={altName}></img>;
};

export default Image;
