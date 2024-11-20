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

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          
          <Route path="/image" element={<SrchResult src="https://d1jyxxz9imt9yb.cloudfront.net/medialib/5027/image/s1300x1300/3_reduced.jpg" caption="Tiger" href="https://www.google.com" linktext="Click here to visit Google" />} />
          <Route path="/"  element= {<Home/>}/>
          <Route path="/counter"  element= {<CounterDisplay/>}/>

        </Routes>
       
      </div>
    </div>
  );
}

export default App;
