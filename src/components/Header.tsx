import GithubLink from "@/components/features/GithubLink";
import "../assets/css/Header.css";
import Container from "./common/Container";
import Spacer from "./common/Spacer";
import TextLink from "./common/TextLink";

const Header = () => {
  const headerText: string = "Portfolio";

  return (
    <header>
      <Container>
        <div className="header-container">
          <p className="header-text">{headerText}</p>
          <div className="links">
            <GithubLink color="black" />
            <Spacer size={20} horizontal={true} />
            <TextLink
              linkUrl="https://qiita.com/taikiti"
              color="black"
              text="Qiita"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
