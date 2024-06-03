import { NavLink } from "react-router-dom"
import './Sidebar.scss'
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUsers } from "react-icons/fa"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="admin_info">
        <img src="https://yt3.ggpht.com/a/AGF-l786THTnrM4KRAhwsRlQ1evttZz0ZRR_RN1okw=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
        <p>Admin</p>
      </div>
      <ul>
        <li>
            <NavLink to='/admin/manage-products'><span><AiOutlineDashboard /></span> Dashboard</NavLink>
        </li>
        <li>
            <NavLink to='/admin/users'><span><FaUsers /></span> Users </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
