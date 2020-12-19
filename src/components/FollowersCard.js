import React from "react";

function FollowersCard() {
  return (
    <div className="followers-card">
      <header></header>
      <div className="total__followers">
        <span className="total__followers__number"></span>
        <span className="total__followers__label">Followers</span>
        <p className="today__followers">
          <img src="./icon-up.svg" alt="" className="indicator__icon" />
          <span className="today__followrs__number"></span>
          <span className="today__followers__label">today</span>
        </p>
      </div>
    </div>
  );
}

export default FollowersCard;
