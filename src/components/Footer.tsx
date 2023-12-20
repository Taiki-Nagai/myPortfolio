import Container from "@/components/common/Container";
import Spacer from "@/components/common/Spacer";
import TextLink from "@/components/common/TextLink";
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
          <TextLink
            linkUrl="#"
            color="white"
            text={footerMenu}
            targetBlank={true}
          />
          <Spacer size={20} horizontal={true} />
          <GithubLink color="white" />
          <Spacer size={20} horizontal={true} />
          <QiitaLink color="white" />
        </div>
        <div className="footer-texts">
          <p className="footer-text">{footerText}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
