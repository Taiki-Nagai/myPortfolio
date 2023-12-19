import "../assets/css/TextLink.css";

type TextLinkProps = {
  color: string;
  linkUrl: string;
  text: string;
};

const TextLink = (props: TextLinkProps) => {
  const { color, linkUrl, text } = props;
  const style: React.CSSProperties = { color, textDecoration: "none" };

  return (
    <a
      className="textLink"
      href={linkUrl}
      style={style}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export default TextLink;
