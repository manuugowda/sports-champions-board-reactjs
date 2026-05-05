import React from "react";
import Profile from "./Profile";

function Gallery() {
  return (
    <div>
      <h1>🏆 Champions of Sports Day 2025</h1>

      <div style={{ display: "flex", gap: "40px" }}>
        <Profile
          name="Virat Kohli"
          image="https://th.bing.com/th/id/OIP.biMvGODQqjjCC7vR7NP37QHaEK?w=320&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          eventWon="Won IPL Trophy in 2025"
        />

        <Profile
          name="AB De Villiers"
          image="https://tse2.mm.bing.net/th/id/OIP.oCIGpre4tAOHGFRtzEHf8gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
          eventWon="ICC Mens' Cricket World Cup Winner"
        />

        <Profile
          name="Chris Gayle"
          image="https://th.bing.com/th/id/OIP.q5-8WBONENTa_QQrBo1rywHaEK?w=326&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          eventWon="One Day International Cricket World Cup Winner"
        />
      </div>
    </div>
  );
}

export default Gallery;