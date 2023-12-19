import "../assets/css/Header.css";
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
            <a
              className="links__header-link"
              href="https://github.com/Taiki-Nagai?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <Spacer size={20} horizontal={true} />
            <a
              className="links__header-link"
              href="https://qiita.com/taikiti"
              target="_blank"
              rel="noreferrer"
            >
              Qiita
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
