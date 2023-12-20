import "../../assets/css/TextLink.css";

export type TextLinkProps = {
  color: string;
  linkUrl: string;
  text: string;
  targetBlank?: boolean;
};

const TextLink = (props: TextLinkProps) => {
  const { color, linkUrl, text, targetBlank } = props;
  const style: React.CSSProperties = { color, textDecoration: "none" };

  return targetBlank ? (
    <a className="textLink" href={linkUrl} style={style} rel="noreferrer">
      {text}
    </a>
  ) : (
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
