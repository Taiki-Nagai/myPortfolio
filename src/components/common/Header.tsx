import GithubLink from "@/components/features/GithubLink";
import QiitaLink from "@/components/features/QiitaLink";
import "../../assets/css/Header.css";
import Container from "./Container";
import Spacer from "./Spacer";

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
            <QiitaLink color="black" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
