// // // // import logo from './logo.jpeg';
// // // import './App.css';
// // // import First from './components/first/First';
// // // import Second from './components/second/second';
// // // import Third from './components/third/third';
// // // import Fourth from './components/fourth/fourth';
// // // function App(){
// // //   const greeting = "Hello from thrid element Parent!";
// // //   const age=30;
// // //   return(
// // //     <div className='App'>
// // //       <h1>Welcome to nesting components in reactjs</h1>
// // //       {/* Nesting First component here */}
// // //       <First></First>
// // //       <Second></Second>
// // //       <Third greeting={greeting} />
// // //       <Fourth age={age}/>
// // //       </div>


// // //   );
// // // }

// // // export default App;
// // import logo from './logo.svg';
// // import './App.css';
// // import Eventhandling from './components/event/Eventhandling';
// // import Onmouseover from './components/Onmouseover/Onmouseover';

// // function App() {
// //   return (
// //     <div className="App">
// //           {/* <Eventhandling></Eventhandling> */}
// //           <Onmouseover></Onmouseover>
// //     </div>
// //   );
// // }

// // export default App;
// import React from 'react';

//   import DF from './DF';


//   function App(){
//     return(
//       <div className="App">
//         <h1>Form Handling</h1>
//         {/* <Event/> */}
//         {/* <counter/> */}
//         {/* <PC/> */}
//         {/* <CR num={0}/> */}
//         {/* <ClassCR/> */}
//         {/* <FormHandling/> */}
//         <DF/>

//       </div>
//     );
//   }
//   export default App;
// import React from 'react';
// import ContactUs from './ContactUs';
// import Login from './Login';
// import DF from './DF';
// import StudentMarks from './StudentMarks';

// function App() {
//   return (
//     <div className="App">
//       <ContactUs />
//       <Login/>
//       <DF/>
//       <StudentMarks/>;
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ContactUs from './ContactUs';
import Login from './Login';
import DF from './DF';
import StudentMarks from './StudentMarks';
import FetchPosts from './FetchPosts';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/contact" style={linkStyle}>Contact Us</Link>
          <Link to="/login" style={linkStyle}>Login</Link>
          <Link to="/df" style={linkStyle}>DF</Link>
          <Link to="/marks" style={linkStyle}>Student Marks</Link>
          <Link to="/fetch" style={linkStyle}>Fetch Data</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome to the React App</h2>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/df" element={<DF />} />
          <Route path="/marks" element={<StudentMarks />} />
          <Route path="/fetch" element={<FetchPosts />} />
        </Routes>
      </div>
    </Router>
  );
}

const linkStyle = {
  marginRight: '15px',
  textDecoration: 'none',
  color: 'blue',
  fontWeight: 'bold'
};

export default App;
