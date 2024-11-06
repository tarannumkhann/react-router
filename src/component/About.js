import React, { Link } from "react-router-dom";
import DetailsPage from "./DetailsPage";
import NavBar from "./Navbar";

function About() {

    const data = [
      { id: 1, name: "Tanuu", contact: 7356486344,  email:'jdj@233', address: 'gkp' },
      { id: 2, name: "Nazia", contact: 7356486344 , email:'kjj@67', address:'lucknow'},
      { id: 3, name: "Taniya", contact: 7356486344, email: 'lli@54', address:'noida' },
      { id: 4, name: "Radhika", contact: 7356486344, email: 'jre@45', address:'delhi' },
    ];
  
  return (
    <div>
      
  <NavBar/>
      <h1>This is my About page</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
      {data.map((user, id) => (
        <div key={id}>
          <Link to={`/detailspage/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}
export default About;
