import NavBar from "./Navbar";
import React, { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate("/about");
  };

  const goToFilterPage = () => {
    navigate("/filter");
  };

  const goToContactPage = () => {
    navigate("/contact");
  };


  return (
    <div>
       <NavBar />
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae!
      </p>
      <button onClick={goToAboutPage}>Go to About Page</button>
      <br />
      <br />
      <button onClick={goToFilterPage}>Go to Filter Page</button>
      <br />
      <br />
      <button onClick={goToContactPage}>Go to Contact Page</button>
     
    </div>
  );
}
export default Home;
