import { useContext } from "react";
import { NodesContext } from "../StatusContext";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import NodeCard from "./NodeCard";

const AlertList = () => {
  const globalNodes = useContext(NodesContext);

  const location = useLocation();
  const { title } = location.state;

  const alertCards = [];

  const getAlertsForNode = (node, breadcrumb) => {
    if (node.state !== 0) {
      node.breadCrumb = breadcrumb;
      alertCards.push(node);
    }

    breadcrumb = breadcrumb.concat(node.title);

    if (node.nodes === undefined) return;

    node.nodes.forEach((innerNode) => {
      getAlertsForNode(innerNode, breadcrumb);
    });
  };

  const topNode = globalNodes.find((node) => node.title === title);

  if (topNode) {   
    getAlertsForNode(topNode, []);
  } else {
    return false; // Rerender the page at refresh. It works...
  }
  
  return (
    <>
      <Navigation title={topNode.title} />
      {alertCards.length > 0 ? <h5>Varningar</h5> : <h5>Allt är ok</h5>}
      <div className="spacer" />
      {alertCards.map((node) => (
        <NodeCard node={node} key={node.title} />
      ))}
    </>
  );
};

export default AlertList;
