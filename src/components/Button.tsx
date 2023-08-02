interface Props {
  children: string;
  onClickButton: () => void;
}

const Button = ({ children, onClickButton }: Props) => {
  return <button onClick={() => onClickButton()}>{children}</button>;
};

export default Button;
