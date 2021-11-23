import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatusIcon = ({ count, status }) => {
  
  let getIconColor = () => {
    if (count === "0") {
      return "disabled";
    }
    return status === "0"
      ? "ok"
      : status === "1"
      ? "warning"
      : status === "2"
      ? "danger"
      : "disabled";
  };

  let getSignColor = () => {
    return count > "0" ? "white" : "mine-shaft-light";
  };

  const getOkIcon = () => {
    return {
      shape: "circle",
      shapeStyle: "fas " + getIconColor(),
      sign: "check",
      signStyle: "fas sign " + getSignColor(),
    };
  };

  const getWarningIcon = () => {
    return {
      shape: "exclamation-triangle",
      shapeStyle: "fas triangle " + getIconColor(),
      sign: "exclamation",
      signStyle: "fas sign ghost " + getSignColor(),
    };
  };

  const getDangerIcon = () => {
    return {
      shape: "square",
      shapeStyle: "fas " + getIconColor(),
      sign: "exclamation",
      signStyle: "fas sign " + getSignColor(),
    };
  };

  const getErrorIcon = () => {
    return {
      shape: "circle",
      shapeStyle: "fas white",
      sign: "exclamation",
      signStyle: "fa sign disabled",
    };
  };

  const getStatusIcon = () => {
    return status === "0" // "ok"
      ? getOkIcon()
      : status === "1" // "warning"
      ? getWarningIcon()
      : status === "2" // "danger"
      ? getDangerIcon()
      : getErrorIcon();
  };

  let statusIcon = getStatusIcon();

  return (
    <div className="fa-layers inner-indicator">
      <FontAwesomeIcon
        icon={statusIcon.shape}
        className={statusIcon.shapeStyle}
      />
      <FontAwesomeIcon
        icon={statusIcon.sign}
        className={statusIcon.signStyle}
      />
    </div>
  );
};

export default StatusIcon;
