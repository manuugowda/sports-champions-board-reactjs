import React from "react";

function Profile({ name, image, eventWon }) {
  return (
    <div style={{ border: "5px solid #ccc", padding: "10px", width: "500px" }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "450px", objectFit: "cover" }}
      />
      <h2>{name}</h2>
      <p>{eventWon}</p>
    </div>
  );
}

export default Profile;