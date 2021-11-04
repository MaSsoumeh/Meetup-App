import NewMeetupForm from "../components/meetups/NewMeetupForm";
import selector from "./NewMeetup.module.css";

function NewMeetupPage() {
  return (
    <section className={selector.section}>
      <h2>Add New Meetup </h2>
      <NewMeetupForm />
    </section>
  );
}
export default NewMeetupPage;
