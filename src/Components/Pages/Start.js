import { Link } from "react-router-dom";
export default function Start() {
    return (
     <div className="container">
      <Link to="/Home">
        <button className="button-start">Start →</button>
      </Link>
     </div> 
     
  
    );
} 