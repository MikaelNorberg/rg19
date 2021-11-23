import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const Navigation = ({title}) => {
    const navigate = useNavigate();
    return (
        <div className="row nav">
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} className="back" />
        </button>
        <h4 className="right">{title}</h4>
      </div>
    )
}

export default Navigation
