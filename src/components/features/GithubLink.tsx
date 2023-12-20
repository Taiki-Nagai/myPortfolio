import TextLink from "@/components/common/TextLink";

type GithubLinkProps = { color: string };

const GithubLink = (props: GithubLinkProps) => {
  const { color } = props;

  return (
    <TextLink
      linkUrl="https://github.com/Taiki-Nagai?tab=repositories"
      color={color}
      text="GitHub"
    />
  );
};

export default GithubLink;
