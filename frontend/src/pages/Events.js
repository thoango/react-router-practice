import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "id1", text: "page 1" },
  { id: "id2", text: "page 2" },
  { id: "id3", text: "page 3" },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.text}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default EventsPage;
