import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Sidebar from "./Components/Sidebar";
import info from "./info";


function App() {
  const cardComponent = info.map((card) => (
    <Card key={card.id} src={card.src} title={card.title} desc={card.desc} />
  ));

  return (
    <div className='App'>

      <Header />
      <Sidebar />

        {/* <div className='Main'>
          <Card/>

        </div> */}
        <div className='Main'>{cardComponent}</div>

    </div>
  );
}

export default App;


