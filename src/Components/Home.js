import React from "react";
import "./home.css";
import Hero from "./Hero";
import Destination from "./Destination";
import RecentTrips from "./RecentTrips";
function Home() {
  const data = [
    {
      title: "Your Journey Your Story",
      para: "Let's Make it Memorable",
      pic: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <Hero data={data} />
      <div className="home text-dark">
        <div>
          <div className="fw-bold text-center mt-5 home-heading">Popular destinations</div>
          <p className="text-center">Tours Give you the Oppurtunity to see a lot, within a time frame.</p>
          <Destination/>
          <RecentTrips/>
          
        </div>
      </div>
    </>
  );
}

export default Home;
