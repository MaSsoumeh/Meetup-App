import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import selector from './AllMeetups.module.css';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-meetup-12e11-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => response.json())
      .then((data) => {
        const allMeetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          allMeetups.unshift(meetup);
        }
        setIsLoading(false);
        setLoadedData(allMeetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={selector.progress}>
        <h3>Loading . . .</h3>
      </section>
    );
  }
  return (
    <section className={selector.section}>
      <h2 className={selector.heading}>All Meetups</h2>
      <MeetupList allMeetups={loadedData} />
    </section>
  );
}
export default AllMeetupsPage;
