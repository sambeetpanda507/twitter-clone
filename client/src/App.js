import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "jquery";
import "popper.js";
import Nav from "./components/navigation/Nav";
import Feed from "./components/feed/Feed";
import News from "./components/news/News";
function App() {
   return (
      <div key="container-fluid" className="container-fluid">
         <div key="row" className="row">
            {/* all the links are present here */}
            <Nav key="nav" />
            {/* all the feeds or posts are present here  */}
            <Feed key="feed" />
            {/* whats happening section is present here */}
            <News key="news" />
         </div>
      </div>
   );
}

export default App;
