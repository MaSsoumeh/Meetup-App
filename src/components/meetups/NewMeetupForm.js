import { useRef } from "react";
import selector from "./NewMeetupForm.module.css";
import Card from "../layout/Card";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const newMeetup = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(newMeetup);
  };
  return (
    <Card>
      <form className={selector.form} onSubmit={submitHandler}>
        <div className={selector.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={selector.control}>
          <label htmlFor="image">Meetup Image URL</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={selector.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={selector.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            required
            ref={descriptionInputRef}
          />
        </div>
        <div className={selector.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
