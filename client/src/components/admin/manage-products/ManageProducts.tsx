import { Outlet } from "react-router-dom"
import './ManageProducts.scss'
const ManageProducts = () => {
  return (
    <div className="dashboard">
      <Outlet/>
    </div>
  )
}

export default ManageProducts
