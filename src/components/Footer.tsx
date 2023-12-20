import Container from "@/components/Container";
import Spacer from "@/components/Spacer";
import TextLink from "@/components/common/TextLink";
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
          <TextLink
            linkUrl="https://github.com/Taiki-Nagai?tab=repositories"
            color="white"
            text="GitHub"
          />
          <Spacer size={20} horizontal={true} />
          <TextLink
            linkUrl="https://qiita.com/taikiti"
            color="white"
            text="Qiita"
          />
        </div>
        <div className="footer-texts">
          <p className="footer-text">{footerText}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
