import Card from "./Card";

export function Cards({items, className, customTitleStyle, width }) {
  return (
    <ul className={className}>
      {items.map(item => <li><Card key={item.id} info={item} width={width} customTitleStyle={customTitleStyle}/></li>)}
    </ul>
  );
}
