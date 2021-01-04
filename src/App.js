
import React from "react";
import './App.css';
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Login from "./components/Login";

function App() {
  const user = null;
  return (
    
    <div className="App">
{!user ? (<Login/>):(
  <>
      <Header></Header>

      <div className="app_body">
         <Sidebar/>
         <Feed/>
         <Widgets/> 
      </div>
  </>
      )
    }
    </div>
  );
}

export default App;
