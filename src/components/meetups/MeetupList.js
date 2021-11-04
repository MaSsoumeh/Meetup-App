import MeetupItem from "./MeetupItem";
function MeetupList(props) {
  return (
    <ul style={{ padding: "20px" }}>
      {props.allMeetups.map((meetup) => {
        const { id, title, description, address, image } = meetup;
        return (
          <MeetupItem
            key={id}
            title={title}
            image={image}
            address={address}
            description={description}
          />
        );
      })}
    </ul>
  );
}
export default MeetupList;
