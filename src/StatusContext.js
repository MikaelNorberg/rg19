import { useState, createContext, useEffect } from "react";

export const NodesContext = createContext();

export const StatusProvider = (props) => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      const res = await fetch("http://localhost:5000/data");
      const data = await res.json();
      return data;
    };

    let nodes = [];

    const setAllData = async () => {
      const nodesData = await fetchDataFromServer();

      nodesData.forEach((node) => {
        nodes.push(node[2]);
      });
      setStatuses(nodes);
    };

    setAllData();
  }, []);

  return (
    <NodesContext.Provider value={statuses}>
      {props.children}
    </NodesContext.Provider>
  );
};
