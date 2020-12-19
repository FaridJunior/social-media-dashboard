import React from "react";
import SocialMediaOverviewCard from "../components/SocialMediaOverviewCard";

function OverViewSection({ overviewData }) {
  return (
    <div>
      {overviewData &&
        overviewData.map((overview) => (
          <SocialMediaOverviewCard key={overview.id} overview={overview} />
        ))}
    </div>
  );
}

export default OverViewSection;
