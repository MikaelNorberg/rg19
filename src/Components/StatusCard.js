import Indicator from "./Indicator";

const StatusCard = ({ statusCard }) => {
  return (
    <div className="card">
      <h5>{statusCard.title} </h5>

      <div className="indicators">
        {statusCard.nodeStatus.map((nodeStat) => (
          <Indicator
            count={nodeStat.count.toString()}
            status={nodeStat.state}
            key={nodeStat.state}
          />
        ))}
      </div>
    </div>
  );
};

export default StatusCard;
