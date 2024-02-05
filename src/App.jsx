// src/App.jsx
import image from "./assets/image.png"; // Import the image file
import logo from "./assets/logo.png"; // Import the image file
import menu from "./assets/menu.png"; // Import the image file
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />

      <img src={image} alt="example" /> // Display the image
      <img src={logo} alt="example" /> // Display the image
      <img src={menu} alt="example" /> // Display the image


    </div>




  );
}

export default App;