import style from "./style.module.scss";

type ItemProps = {
  title: string;
  value: string;
  position: number;
};

const Item = (props: ItemProps) => {
  return (
    <li className={style.item}>
      <div>{props.position}</div>
      <div className={style.item__title}>{props.title}</div>
    </li>
  );
};

export default Item;
