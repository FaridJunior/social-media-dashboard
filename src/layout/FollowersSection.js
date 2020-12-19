import React from "react";
import FollowersCard from "../components/FollowersCard";

function FollowersSection({ socialMediaFollowrs }) {
  return (
    <section>
      {socialMediaFollowrs &&
        socialMediaFollowrs.map((data) => (
          <FollowersCard key={data.id} data={data} />
        ))}
    </section>
  );
}

export default FollowersSection;
