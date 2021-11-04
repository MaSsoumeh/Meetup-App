import MeetupList from "../components/meetups/MeetupList";
import selector from "./AllMeetups.module.css";

const allMeetups = [
  {
    id: "1",
    title: "Machu Picchu",
    image:
      "https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-machu-picchu-peru.jpg",
    address: "Peru",
    description:
      "he journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire. Cusco is a fascinating place to explore—be sure to spend a few days there before or after your Machu Picchu adventure. ",
  },
  {
    id: "2",
    title: "Colosseum",
    image:
      "https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-rome-italy.jpg",
    address: "Rome, Italy",
    description:
      "These must-see sites for any visitor include the Colosseum and adjacent Roman Forum; the Pantheon; and Vatican City, a separate country in the middle of central Rome.",
  },
  {
    id: "3",
    title: "Maui",
    image:
      "https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-maui-hawaii.jpg",
    address: "Hawaii",
    description:
      "This Hawaiian island offers a wide range of experiences for visitors. You can surf, enjoy a meal on the beach at a five-star luxury resort in Wailea, ride a horse across a dormant volcano in Haleakala National Park, or hike through a rainforest in the West Maui Mountains. The natural scenery is amazing—it's truly one of the most beautiful islands in the world. ",
  },
];
function AllMeetupsPage() {
  return (
    <section>
      <h2 className={selector.heading}>All Places to visit</h2>
      <MeetupList allMeetups={allMeetups} />
    </section>
  );
}
export default AllMeetupsPage;
