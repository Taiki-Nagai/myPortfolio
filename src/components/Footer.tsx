import Container from "@/components/common/Container";
import Spacer from "@/components/common/Spacer";
import GithubLink from "@/components/features/GithubLink";
import QiitaLink from "@/components/features/QiitaLink";
import "../assets/css/Footer.css";

const Footer = () => {
  const footerMenu: string = "Gallery";
  const footerText: string = "Nagai's portfolio";

  return (
    <footer>
      <Container>
        <div className="footer">
          <a className="footer-menu" href="#">
            {footerMenu}
          </a>
          <Spacer size={20} horizontal={true} />
          <GithubLink color="white" />
          <Spacer size={20} horizontal={true} />
          <QiitaLink color="whihte" />
        </div>
        <div className="footer-texts">
          <p className="footer-text">{footerText}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
