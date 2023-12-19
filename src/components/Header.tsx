import "../assets/css/Header.css";
import Container from "./Container";

const Header = () => {
  const headerText: string = "Portfolio";

  return (
    <header>
      <Container>
        <p className="header-text">{headerText}</p>
      </Container>
    </header>
  );
};

export default Header;
