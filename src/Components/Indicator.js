import StatusIcon from "./StatusIcon";

const Indicator = ({ count, status }) => {
  return (
    <div className="indicator">
      <StatusIcon count={count} status={status}></StatusIcon>
      <p>{count}</p>
    </div>
  );
};

export default Indicator;
