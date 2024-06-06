import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <span>You have gone to the wrong link </span>
      <Link to="/">back to home</Link>
    </div>
  ); 
}
