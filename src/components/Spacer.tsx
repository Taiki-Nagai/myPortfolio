type SpacerProps = {
  size: number;
  horizontal?: boolean;
};

const Spacer = (props: SpacerProps) => {
  const { size, horizontal } = props;

  const style = horizontal
    ? { height: 0, width: size }
    : { height: size, width: 0 };

  return <div style={style}></div>;
};

export default Spacer;
