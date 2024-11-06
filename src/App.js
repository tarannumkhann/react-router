import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
// import NavBar from "./component/Navbar";
import Page404 from "./component/404page";
import FilterPage from "./component/Filter";
import ContactUS from "./component/contact";
import DetailsPage from "./component/DetailsPage";
import Channel from "./component/channel";
import Company from "./component/company";
import Other from "./component/other";
import Login from "./component/Login";
import Protected from "./component/Protected";

function App() {
  const data = [
    {
      id: 1,
      name: "Tanuu",
      contact: 7356486344,
      email: "jdj@233",
      address: "gkp",
    },
    {
      id: 2,
      name: "Nazia",
      contact: 7356486344,
      email: "kjj@67",
      address: "lucknow",
    },
    {
      id: 3,
      name: "Taniya",
      contact: 7356486344,
      email: "lli@54",
      address: "noida",
    },
    {
      id: 4,
      name: "Radhika",
      contact: 7356486344,
      email: "jre@45",
      address: "delhi",
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Protected Component={Home} />} />
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/" element={<Login />} />

          <Route
            path="/filter"
            element={<Protected Component={FilterPage} />}
          />
          <Route path="/*" element={<Page404 />} />
          <Route path="/contact/" element={<ContactUS />}>
            <Route path="channel" element={<Channel />} />
            <Route path="company" element={<Company />} />
            <Route path="other" element={<Other />} />
          </Route>
          <Route
            path="/detailspage/:id"
            element={<DetailsPage data={data} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
