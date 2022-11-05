import React from "react";
import "./index.css";
import {useState} from "react"

function App() {

  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Resume />
    </main>
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

export default App;
