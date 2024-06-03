import "./Auth.scss"
import banner6 from "../../assets/images/Banner6.jpg"
import { Link } from "react-router-dom"

const Auth = () => {
  return (
    <div className="auth-container">
      <img src={banner6} alt="" />
      <div className="auth-wrapper">
        <h3>AUTHORIZED RETAILERS</h3>
        <p>Locate your nearest retailer using our comprehensive retailer search. Retailer names, addresses and in some cases, telephone numbers are provided in the database.</p>
        <p>Please note that if a retailer's name is not found in this database, they are not an Authorized Patek Philippe retailer.</p>
        <Link to="https://www.patek.com/en/retail-service/authorized-retailers/asia">
          <div className="auth-btn">authorized  retailers</div>
        </Link>
      </div>
    </div>
  )
}

export default Auth