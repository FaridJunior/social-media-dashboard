import React from "react";
import DangerRatio from "./DangerRatio";
import "./followers_card.css";

function FollowersCard({ data, index }) {
  const {
    platform,
    platformIcon,
    username,
    totalFolowrs,
    todayFollowrs,
  } = data;
  return (
    <div
      className={"followers-card " + platform}
      style={{ transitionDelay: index * 50 + "ms" }}
    >
      <header>
        <img src={platformIcon} alt="" className="platform__icon" />
        <span className="user__name">{username}</span>
      </header>
      <div className="total__followers">
        <span className="total__followers__number">{totalFolowrs}</span>
        <span className="total__followers__label">Followers</span>
      </div>
      <div className="today__followers">
        {platform === "youtube" ? (
          <DangerRatio number={todayFollowrs} />
        ) : (
          <>
            <img
              src="./images/icon-up.svg"
              alt=""
              className="indicator__icon"
            />
            <span className="today__followrs__number">{todayFollowrs}</span>
            <span className="today__followers__label">today</span>
          </>
        )}
      </div>
    </div>
  );
}

export default FollowersCard;
