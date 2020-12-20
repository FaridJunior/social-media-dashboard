import React from "react";
import FollowersCard from "../components/FollowersCard";

function FollowersSection({ socialMediaFollowrs }) {
  return (
    <div className="followers__section main-grid">
      {socialMediaFollowrs &&
        socialMediaFollowrs.map((data, index) => (
          <FollowersCard key={data.id} data={data} index={index} />
        ))}
    </div>
  );
}

export default FollowersSection;
