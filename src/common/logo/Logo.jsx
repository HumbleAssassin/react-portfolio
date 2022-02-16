import { Link } from "react-router-dom"

const Logo = ({ BSClass }) => {
   return (
      <Link to="/" className={`${BSClass} fw-bold`}>
         Rajeev Thapa
      </Link>
   )
}

export default Logo
