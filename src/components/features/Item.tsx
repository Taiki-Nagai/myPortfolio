import "../../assets/css/Item.css";

export type ItemProps = {
  img: string;
  siteUrl: string;
  siteName: string;
  usedLanguage: string;
  productionTime: string;
  summary: string;
};

const Item = (props: ItemProps) => {
  const { img, siteUrl, siteName, usedLanguage, productionTime, summary } =
    props;

  return (
    <div className="item">
      <a href={siteUrl} target="_blank" rel="noopener noreferrer">
        <img src={img} alt="" className="img-style" />
      </a>
      <table className="tbl">
        <tbody>
          <tr className="tbl-tr">
            <td className="tbl-tr__tdTitle">サイト名：</td>
            <td>{siteName}</td>
          </tr>
          <tr className="tbl-tr">
            <td className="tbl-tr__tdTitle">使用言語：</td>
            <td>{usedLanguage}</td>
          </tr>
          <tr className="tbl-tr">
            <td className="tbl-tr__tdTitle">制作期間：</td>
            <td>{productionTime}</td>
          </tr>
          <tr className="tbl-tr">
            <td className="tbl-tr__tdTitle">　概要　：</td>
            <td>{summary}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Item;
