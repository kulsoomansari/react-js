// import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import SideBar from './SideBar';
import Maths from './component/Maths';
import Hi from './component/Hi';
import {By} from './component/By';
import { MediaCard } from './component/MediaCard';
import image from './image/media.jpg'
import { Gate } from './component/Gate';
function App() {
  return (
    <div>
   {/* <Hi name='good morning'/>
    <By name='class' /> */}
    <MediaCard title='MediaCard' body={(<b><i>this is media card</i></b>)} imageUrl={(image)} />
    <Gate />
    {/* <SideBar />
    <Button />
    <Maths /> */}
  </div>
);
}
export default App;
