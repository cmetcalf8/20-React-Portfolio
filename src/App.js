import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import PortfolioContainer from "./components/PortfolioContainer";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

import "./index.css";

export default function App() {

  return (
    <div className="container mx-auto bg-sky-800 rounded-xl shadow border p-8 m-10">
    <p className="text-3xl text-white-100 font-bold mb-5">
      Cory Metcalf
    </p>

    <main className="text-gray-400 bg-gray-900 body-font">
      <PortfolioContainer />
      {/* <Navbar />
      <About />
      <Projects />
      <Contact />
      <Resume /> */}
    </main>
    </div>
  );
}


//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         {arr.map(taco => {
//           return <Goof mops={taco} />
//         })}
//         <button style={dog ? style.frank : style.dank} onClick={()=>{
//           setDog(!dog)
//         }}>{dog ? "I like dogs" : "i'm evil"}</button>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn tacocatr
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
