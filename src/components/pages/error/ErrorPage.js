import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>ErrorPage</h1>
      <Link to={"/"}>
        <button>Continue shopping</button>
      </Link>
    </div>
  )
}
