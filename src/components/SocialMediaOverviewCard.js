import React from "react";
import DangerRatio from "./DangerRatio";
import "./social_media_overview_card.css";

function SocialMediaOverviewCard({ overview, index }) {
  const { state, label, icon, number, ratio } = overview;
  return (
    <div
      className="social__media__overview__card"
      style={{ transitionDelay: 200 + 50 * index + "ms" }}
    >
      <span className="label">{label}</span>
      <img src={icon} alt="" className="icon" />
      <span className="number">{number}</span>
      {state && state === "danger" ? (
        <span className="ratio">
          <img className="ratio__icon" src="./images/icon-down.svg" alt="" />
          <span style={{ color: "var(--bright-red)" }}>{ratio}</span>
        </span>
      ) : (
        <span className="ratio">
          <img className="ratio__icon" src="./images/icon-up.svg" alt="" />
          {ratio}
        </span>
      )}
    </div>
  );
}

export default SocialMediaOverviewCard;
