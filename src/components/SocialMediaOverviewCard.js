import React from "react";

function SocialMediaOverviewCard({ overview }) {
  const { label, icon, number, ratio } = overview;
  return (
    <div className="social__media__overview__card">
      <div className="">
        <span className="label">{label}</span>
        <img src={icon} alt="" className="icon" />
      </div>
      <div className="">
        <spam className="number">{number}</spam>
        <span className="ratio">{ratio}</span>
      </div>
    </div>
  );
}

export default SocialMediaOverviewCard;
