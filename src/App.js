import "./App.css";
import Comittee from "./components/committee/committee";
import ContactUs from "./components/contactUs/contactUs";
import EventList from "./components/eventList/eventList";
import Header from "./components/header/header";
import HighlightedEvent from "./components/highlightedEvent/highlightedEvent";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <HighlightedEvent />
      <EventList />
      <Comittee />
      <ContactUs />
    </div>
  );
}

export default App;
