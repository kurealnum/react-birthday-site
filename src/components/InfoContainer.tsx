interface containerProps {
  children: string;
  title: string;
  alignRight: boolean;
}

const InfoContainer = ({ children, title, alignRight }: containerProps) => {
  return (
    <div className="info-container">
      {alignRight ? (
        <>
          <InfoContainerHeader>{title}</InfoContainerHeader>
          <p className="align-right">{children}</p>
        </>
      ) : (
        <>
          <InfoContainerHeader>{title}</InfoContainerHeader>
          <p>{children}</p>
        </>
      )}
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
