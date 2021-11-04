import selector from "./Card.module.css";
function Card(props) {
  return <div className={selector.card}>{props.children}</div>;
}
export default Card;
