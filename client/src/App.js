import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AllEvents from "./pages/AllEvents";
import EventDetails from "./pages/EventDetails";
import EventsCreatedByUser from "./pages/EventsCreatedByUser";
import EventsUserJoined from "./pages/EventsUserJoined";
import Home from "./pages/Home";
import UserInformation from "./pages/UserInformation";

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events/allEvents" element={<AllEvents />} />
          <Route exact path="/events/:id" element={<EventDetails />} />
          <Route exact path="/User/:UserId" element={<UserInformation />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
