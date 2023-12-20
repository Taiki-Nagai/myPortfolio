import TextLink from "@/components/common/TextLink";

type QiitaLinkProps = { color: string };

const QiitaLink = (props: QiitaLinkProps) => {
  const { color } = props;

  return (
    <TextLink linkUrl="https://qiita.com/taikiti" color={color} text="Qiita" />
  );
};

export default QiitaLink;
