import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import selector from './NewMeetup.module.css';

function NewMeetupPage() {
  const navigate = useNavigate();
  const NewMeetupHandler = (props) => {
    fetch(
      'https://react-meetup-12e11-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(props),
        headers: {
          'content-type': 'application/json',
        },
      }
    ).then(() => {
      navigate('/');
    });
  };
  return (
    <section className={selector.section}>
      <h2>Add New Meetups</h2>
      <NewMeetupForm onAddMeetup={NewMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
