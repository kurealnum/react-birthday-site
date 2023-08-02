interface containerProps {
  children: string;
  title: string;
}

const InfoContainer = ({ children, title }: containerProps) => {
  return (
    <div className="info-container">
      <InfoContainerHeader>{title}</InfoContainerHeader>
      <p>{children}</p>
    </div>
  );
};

//stuff for header used in InfoContainer
interface headerProps {
  children: string;
}

const InfoContainerHeader = ({ children }: headerProps) => {
  return <h3>{children}</h3>;
};

export default InfoContainer;
