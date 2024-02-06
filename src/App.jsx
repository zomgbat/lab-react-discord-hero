// src/App.jsx
import './App.css';
import logo from "./assets/logo.png"; // Import the image file
import image from "./assets/image.png";
import menu from "./assets/menu.png";
import Button from './Button';
import Button2 from './Button2';


function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img className="logo" src={logo} alt="example" />
        <img className="menu" src={menu} alt="example" />

      </nav>


      <div className="Body">
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
       
        <div className="button-container">
          <Button />
          <Button2 />
        </div>
        
        <img class="image" src={image} alt="example" />


      </div>
    </div>




  );
}

export default App;