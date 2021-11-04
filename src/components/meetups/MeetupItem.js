import Card from "../layout/Card";
import selector from "./MeetupItem.module.css";
function MeetupItem(props) {
  const { title, image, address, description } = props;
  return (
    <li className={selector.item}>
      <Card>
        <figure className={selector.image}>
          <img src={image} alt={`a must-see place in ${address}`}></img>
        </figure>
        <header>
          <h3>{title}</h3>
        </header>
        <article className={selector.content}>
          <em>{address}</em>
          <p> {description}</p>
        </article>
        <div className={selector.actions}>
          <button>Favorite</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
