import { useLocation } from "react-router-dom";
import StatusIcon from "./StatusIcon";
import Navigation from "./Navigation";

const Node = ({ propPath, propNode }) => {
  const location = useLocation();
  const { node: nodeFromLink } = location.state;

  const stringifyBreadcrumb = (breadcrumb) => {
    if (breadcrumb.length === 1) {
      return breadcrumb;
    }
    let path = "";

    breadcrumb.forEach((crumb) => {
      path = path + crumb + " › ";
    });
    return path;
  };

  let newNode = {};

  if (nodeFromLink) {
    newNode = {
      title: nodeFromLink.title,
      path: stringifyBreadcrumb(nodeFromLink.breadCrumb),
      status: nodeFromLink.state.toString(),
      output: nodeFromLink.output,
    };
  } else {
    // Node from properties
    newNode = {
      title: propNode.title,
      path: propPath,
      status: propNode.state.toString(),
      output: propNode.output,
    };
  }

  return (
    <>
      <Navigation title={""} />
      <div className="alert">
        <StatusIcon count={"1"} status={newNode.status}></StatusIcon>
      </div>
      <p className="small">{newNode.path}</p>
      <h5 className="">{newNode.title}</h5>

      <p className="output">{newNode.output}</p>

      <hr className="" />
      <div className="row">
        <p>Unassigned</p>
        <div className="link far-right">More &gt;</div>
      </div>
    </>
  );
};

export default Node;
