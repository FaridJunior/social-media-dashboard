const DangerRatio = ({ number }) => {
  return (
    <>
      <img src="./images/icon-down.svg" alt="" className="indicator__icon" />
      <span
        className="today__followrs__number"
        style={{ color: "var(--bright-red)" }}
      >
        {number}
      </span>
      <span
        className="today__followers__label"
        style={{ color: "var(--bright-red)" }}
      >
        today
      </span>
    </>
  );
};

export default DangerRatio;
