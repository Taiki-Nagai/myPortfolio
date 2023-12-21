import "../../assets/css/MainSection.css";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import Container from "../common/Container";
import { ItemProps } from "../features/Item";
import Items from "../features/Items";

const MainSection = () => {
  const items: ItemProps[] = [
    {
      img: img1,
      siteUrl: "#",
      siteName: "site1",
      usedLanguage: "HTML、CSS、SASS、jQuery",
      productionTime: "10〜14日",
      summary: "テキストテキストテキストテキスト",
    },
    {
      img: img2,
      siteUrl: "#",
      siteName: "site2",
      usedLanguage: "HTML、CSS、SASS、jQuery",
      productionTime: "5〜7日",
      summary: "テキストテキストテキストテキスト",
    },
    {
      img: img3,
      siteUrl: "#",
      siteName: "site3",
      usedLanguage: "HTML、CSS、SASS、jQuery",
      productionTime: "3〜5日",
      summary: "テキストテキストテキストテキスト",
    },
  ];

  return (
    <section className="mainSection">
      <Container>
        <Items items={items} />
      </Container>
    </section>
  );
};

export default MainSection;
