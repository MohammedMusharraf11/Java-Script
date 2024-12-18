// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import ResImage from './components/ResImage';
// import ResCaption from './components/ResCaption';
// import ResLink from './components/ResLink';

// function App() {
//   return (
//     <div className="App">
//       <div>
//         {/* In .jsx Image tag should be self closing as it does not contain child elements  */}
//         <ResImage image="https://d1jyxxz9imt9yb.cloudfront.net/medialib/5027/image/s1300x1300/3_reduced.jpg"/>
//         <ResCaption/>
//         <ResLink/>
//       </div>
//     </div>
//   );
// }
// export default App;


import './App.css';
import React from 'react';
import SrchResult from './components/SrchResult';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CounterDisplay from './pages/CounterDisplay';
import Demo from './components/Name';
import Ref from './components/Ref';
import Key from './components/Keys';
import  Events from './components/Events';
import  Events1 from './components/Events1';
import Forms from './components/Forms';
import FormRevision from './components/FormRevision';
import Hooks from './components/Hooks';
import Image from './components/Image';
import CustomText from './components/CustomText';
import DigitalClock from './components/DigitalClock';
import MeraCounter from './components/MeraCounter';
import Ref1 from './components/Ref1';
import Ref2 from './components/Ref2';
import Ref3 from './components/Ref3';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          
          <Route path="/image" element={<SrchResult src="https://d1jyxxz9imt9yb.cloudfront.net/medialib/5027/image/s1300x1300/3_reduced.jpg" caption="Tiger" href="https://www.google.com" linktext="Click here to visit Google" price="$2000"  location="India "/>} />
          <Route path="/"  element= {<Home/>}/>
          <Route path="/counter"  element= {<CounterDisplay/>}/>
          <Route path="/name"  element= {<Demo name="Sachin"/>}/>
          <Route path="/ref"  element= {<Ref/>}/>
          <Route path="/ref1"  element= {<Ref1/>}/>
          <Route path="/ref2"  element= {<Ref2/>}/>
          <Route path="/ref3"  element= {<Ref3/>}/>
          <Route path="/keys"  element= {<Key/>}/>
          <Route path="/events"  element= {<Events/>}/>
          <Route path="/events1"  element= {<Events1/>}/>
          <Route path="/forms"  element= {<Forms/>}/>
          <Route path="/forms1"  element= {<FormRevision/>}/>
          <Route path="/hooks"  element= {<Hooks/>}/>
          <Route path="/img"  element= {<Image/>}/>
          <Route path="/txt"  element= {<CustomText/>}/>
          <Route path="/digitalClock" element = {<DigitalClock/>}/>
          <Route path="/mc" element = {<MeraCounter/>}/>

        </Routes>
       
      </div>
    </div>
  );
}

export default App;
