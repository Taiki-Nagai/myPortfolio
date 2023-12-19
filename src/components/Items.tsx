import "../assets/css/Items.css";
import Item, { ItemProps } from "./Item";

type ItemsProps = {
  items: ItemProps[];
};

const Items = (props: ItemsProps) => {
  const { items } = props;

  return (
    <div className="items">
      {items.map((item) => {
        return (
          <Item
            img={item.img}
            siteUrl={item.siteUrl}
            siteName={item.siteName}
            usedLanguage={item.usedLanguage}
            productionTime={item.productionTime}
            summary={item.summary}
          />
        );
      })}
    </div>
  );
};

export default Items;
