import "../assets/css/Header.css";
import Container from "./Container";
import Spacer from "./Spacer";
import TextLink from "./TextLink";

const Header = () => {
  const headerText: string = "Portfolio";

  return (
    <header>
      <Container>
        <div className="header-container">
          <p className="header-text">{headerText}</p>
          <div className="links">
            <TextLink
              linkUrl="https://github.com/Taiki-Nagai?tab=repositories"
              color="black"
              text="GitHub"
            />
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
