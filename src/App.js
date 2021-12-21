import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Screen1nav from './Screen1nav';
import Screen2signin from './Screen2signin';
import Screen3signup from './Screen3signup';
import Screen4browse from './Screen4browse';
import Screen5myclass from './Screen5myclass';
import Screen6joinclass from './Screen6joinclass';
import Screen7 from './Screen7';
import Screen8resetpw from './Screen8resetpw';
import Screen9orderdetails from './Screen9orderdetails';
import Screen10feedback from './Screen10feedback';
import Screen11certificate from './Screen11certificate';
import Screen12aws from './Screen12aws';
import Screen13checkmail from './Screen13checkmail';
import Screen14 from './Screen14';
import Screen15 from './Screen15';
import Screen16 from './Screen16';
import Screen17 from './Screen17';
import Screen18 from './Screen18';
import Screen19 from './Screen19';
import Screen20 from './Screen20';
import Screen21 from './Screen21';
import Screen22 from './Screen22';
import Screen23 from './Screen23';
import Screen24 from './Screen24';
import Screen25 from './Screen25';
import Screen26 from './Screen26';
import Screen27 from './Screen27';
import Screen28 from './Screen28';
import Screen29 from './Screen29';
function App() {
  return (
    <div className="App">
      {/* <Screen1nav/> */}
    <BrowserRouter>
       <Routes>
         {/* <Route path="/screen1" element={<Screen1></Screen1>}></Route> */}
         <Route path="/screen2signin" element={<Screen2signin></Screen2signin>}></Route>
         <Route path="/screen3signup" element={<Screen3signup></Screen3signup>}></Route>
         <Route path="/screen4browse" element={<Screen4browse></Screen4browse>}></Route>
         <Route path="/screen5myclass" element={<Screen5myclass></Screen5myclass>}></Route>
         <Route path="/screen6joinclass" element={<Screen6joinclass></Screen6joinclass>}></Route>
         <Route path="/screen7" element={<Screen7></Screen7>}></Route>
         <Route path="/screen8resetpw" element={<Screen8resetpw></Screen8resetpw>}></Route>
         <Route path="/screen9orderdetails" element={<Screen9orderdetails></Screen9orderdetails>}></Route>
         <Route path="/screen10feedback" element={<Screen10feedback></Screen10feedback>}></Route>
         <Route path="/screen11certificate" element={<Screen11certificate></Screen11certificate>}></Route>
         <Route path="/screen12aws" element={<Screen12aws></Screen12aws>}></Route>
         <Route path="/screen13checkmail" element={<Screen13checkmail></Screen13checkmail>}></Route>
         <Route path="/screen14" element={<Screen14></Screen14>}></Route>
         <Route path="/screen15" element={<Screen15></Screen15>}></Route>
         <Route path="/screen16" element={<Screen16></Screen16>}></Route>
         <Route path="/screen17" element={<Screen17></Screen17>}></Route>
         <Route path="/screen18" element={<Screen18></Screen18>}></Route>
         <Route path="/screen19" element={<Screen19></Screen19>}></Route>
         <Route path="/screen20" element={<Screen20></Screen20>}></Route>
         <Route path="/screen21" element={<Screen21></Screen21>}></Route>
         <Route path="/screen22" element={<Screen22></Screen22>}></Route>
         <Route path="/screen23" element={<Screen23></Screen23>}></Route>
         <Route path="/screen24" element={<Screen24></Screen24>}></Route>
         <Route path="/screen25" element={<Screen25></Screen25>}></Route>
         <Route path="/screen26" element={<Screen26></Screen26>}></Route>
         <Route path="/screen27" element={<Screen27></Screen27>}></Route>
         <Route path="/screen28" element={<Screen28></Screen28>}></Route>
         <Route path="/screen29" element={<Screen29></Screen29>}></Route>
       </Routes>
       </BrowserRouter>
    
    </div>
  );
}

export default App;
