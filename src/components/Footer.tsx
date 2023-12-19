import "../assets/css/Footer.css";
import Container from "./Container";
import Spacer from "./Spacer";

const Footer = () => {
  const footerMenu: string = "Gallery"; // とりあえず今は一つだけ
  const footerText: string = "Nagai's portfolio";

  return (
    <footer>
      <Container>
        <div className="footer">
          <p className="footer-menu">{footerMenu}</p>
          <Spacer size={20} horizontal={true} />
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
        <div className="footer-texts">
          <p className="footer-text">{footerText}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
