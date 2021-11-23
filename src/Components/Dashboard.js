import { Link } from "react-router-dom";
import { useContext } from "react";
import { NodesContext } from "../StatusContext";
import StatusCard from "./StatusCard";

const Dashboard = () => {
  const statusCardsData = [];
  const getStatusCardsData = (node) => {
    const newNodeStatus = [
      { state: "0", count: 0 },
      { state: "1", count: 0 },
      { state: "2", count: 0 },
    ];

    const getStatusForAllNodes = (nodes) => {
      nodes.forEach((node) => {
        node.state === 2 // Danger
          ? newNodeStatus[2].count++
          : node.state === 1 // Warning
          ? newNodeStatus[1].count++
          : newNodeStatus[0].count++; // All good

        if (node.nodes) {
          getStatusForAllNodes(node.nodes); // Recursive
        }
      });

      return newNodeStatus;
    };

    const statusCardData = {
      title: node.title,
      nodeStatus: getStatusForAllNodes(node.nodes),
    };

    statusCardsData.push(statusCardData);
  };

  const nodes = useContext(NodesContext);

  if (nodes.length === 0) {
    return <div>Lyckades inte hämta data</div>;
  }

  nodes.forEach((node) => {
    getStatusCardsData(node);
  });

  return (
    <>
      <h4>Överblick (BI)</h4>
      {statusCardsData.map((statusCardData) => (
        <Link
          to="/AlertList"
          key={statusCardData.title}
          state={{ title: statusCardData.title }}
        >
          <StatusCard statusCard={statusCardData} key={statusCardData.title} />
        </Link>
      ))}
    </>
  );
};

export default Dashboard;
