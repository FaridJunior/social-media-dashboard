import React from "react";
import SocialMediaOverviewCard from "../components/SocialMediaOverviewCard";

function OverViewSection({ overviewData }) {
  return (
    <div className="overView__section main-grid">
      {overviewData &&
        overviewData.map((overview, index) => (
          <SocialMediaOverviewCard
            key={overview.id}
            overview={overview}
            index={index}
          />
        ))}
    </div>
  );
}

export default OverViewSection;
