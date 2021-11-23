import Node from "./Node";

import { Link } from "react-router-dom";

const NodeCard = ({ node }) => {
  const stringifyBreadcrumb = (breadcrumb) => {
    return breadcrumb.length === 1
      ? breadcrumb[0]
      : breadcrumb.length === 2
      ? breadcrumb[0] + " › " + breadcrumb[1]
      : breadcrumb[0] + " › . . . › " + breadcrumb[breadcrumb.length - 1];
  };

  const path = stringifyBreadcrumb(node.breadCrumb);

  return (
    <Link to="/Node" key={node.title} state={{ node }}>
      <div className="card">
        <Node propPath={path} propNode={node} />
      </div>
    </Link>
  );
};

export default NodeCard;
