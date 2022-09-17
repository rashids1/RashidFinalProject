import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { GlobalContext } from "./globalContext";
import AllEvents from "./pages/AllEvents";
import EventDetails from "./pages/EventDetails";
import EventsCreatedByUser from "./pages/EventsCreatedByUser";
import EventsUserJoined from "./pages/EventsUserJoined";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import DrawerMenu from "./components/DrawerMenu";
import EventsNearYou from "./pages/EventsNearYou";
import CreateYourOwnEvent from "./pages/CreateYourOwnEvent";
import GlobalStyle from "./globalStyles";
import CreateYourOwnEvent2 from "./pages/CreateYourOwnEvent2";

const App = () => {
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <NavBar />
        <DrawerMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events/allEvents" element={<AllEvents />} />
          <Route exact path="/events/:eventId" element={<EventDetails />} />
          <Route exact path="/user/:userId" element={<UserProfile />} />
          <Route exact path="/eventsNearYou" element={<EventsNearYou />} />
          <Route
            exact
            path="/createYourOwnEvent"
            element={<CreateYourOwnEvent2 />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
