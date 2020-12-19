import React from "react";

function FollowersCard({ data }) {
  const {
    platform,
    platformIcon,
    username,
    totalFolowrs,
    todayFollowrs,
  } = data;
  return (
    <div className="followers-card">
      <header>
        <img src={platformIcon} alt="" className="platform__icon" />
        <span className="user__name">{username}</span>
      </header>
      <div className="total__followers">
        <span className="total__followers__number">{totalFolowrs}</span>
        <span className="total__followers__label">Followers</span>
        <p className="today__followers">
          <img src="./icon-up.svg" alt="" className="indicator__icon" />
          <span className="today__followrs__number">{todayFollowrs}</span>
          <span className="today__followers__label">today</span>
        </p>
      </div>
    </div>
  );
}

export default FollowersCard;
