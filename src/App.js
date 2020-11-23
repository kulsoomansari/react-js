// import logo from './logo.svg';
import './App.css';
// import Header from './Header';
import Component from './Component';
import SideBar from './SideBar';
import Show from "./component/Show";
function App() {
  return (
    <div>
    {/* <Header /> */}
    <Component />
    <SideBar />
    {/* <h2>my first app .</h2>
    <p>this is the first page of react.</p> */}
    <Show />
  </div>
);
}
export default App;
