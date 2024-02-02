import "./App.css";
import Comittee from "./components/committee/committee";
import ContactUs from "./components/contactUs/contactUs";
import EventList from "./components/eventList/eventList";
import Header from "./components/header/header";
import HighlightedEvent from "./components/highlightedEvent/highlightedEvent";
import Home from "./components/home/home";
import ScrollScreen, { Section } from "./components/scrollScreen";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <ScrollScreen
        scrollBarColors={[
          {
            track: "rgb(5 18 60)",
            scroll: "white",
            accent: "white",
          },
          {
            track: "#00a2e1",
            scroll: "white",
            accent: "white",
          },
        ]}
        children={[...Home()]}
      />
      <Sidebar />


      <div style={{ height: "100vh" }} />
      <Header />
      <HighlightedEvent />
      <EventList />
      <Comittee />
      <ContactUs />
    </div>
  );
}

export default App;
