import Profile from "./profile/profile";
import photo from './profile/download.jpg';
import "./App.css";
export default function App() {
var x = "nada";
const funprop = () => {
  return alert ("Be careful");

};
return (
  <div className="App">
    <Profile OLI="MY NADAY" photo={photo} alert={funprop}/>
  </div>
);
}