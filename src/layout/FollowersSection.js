import React from "react";
import FollowersCard from "../components/FollowersCard";

function FollowersSection({ socialMediaFollowrs }) {
  return (
    <section className="followers__section main-grid">
      {socialMediaFollowrs &&
        socialMediaFollowrs.map((data, index) => (
          <FollowersCard key={data.id} data={data} index={index} />
        ))}
    </section>
  );
}

export default FollowersSection;
