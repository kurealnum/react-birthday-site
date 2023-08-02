interface Props {
  children: string;
}

const SubHeader = ({ children }: Props) => {
  return <h2>{children}</h2>;
};

export default SubHeader;
