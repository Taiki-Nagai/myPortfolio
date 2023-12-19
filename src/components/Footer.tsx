import "../assets/css/Footer.css";
import Container from "./Container";

const Footer = () => {
  const footerMenu: string = "Gallery"; // とりあえず今は一つだけ
  const footerText: string = "Nagai's portfolio";

  return (
    <footer>
      <Container>
        <div className="footer">
          <p className="footer-menu">{footerMenu}</p>
        </div>
        <div className="footer-texts">
          <p className="footer-text">{footerText}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
