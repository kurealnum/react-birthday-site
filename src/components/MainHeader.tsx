interface Props {
  children: string;
}

const MainHeader = ({ children }: Props) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default MainHeader;
