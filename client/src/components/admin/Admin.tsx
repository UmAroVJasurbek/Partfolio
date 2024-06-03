import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";
import './Admin.scss'
const Admin = () => {
  const {pathname} = useLocation();
  return (
      <div className="admin">
     <Sidebar/>
    <div className="admin__content">
    <nav className="manage-products_navbar" >
      <h1>Dashboard</h1>
      {pathname.includes("manage-products") &&
        <ul>
           <li>
        <NavLink to='/admin/manage-products/products'>
          Products
        </NavLink>
        </li>
        <li>
        <NavLink to='/admin/manage-products/create'>
          Create
        </NavLink>
        </li>
        <li>
        <NavLink to='/admin/manage-products/edit' >
          Edit
        </NavLink>
        </li>
      </ul>
      }
      </nav>
     <Outlet/>
    </div>
      </div>
  );
};

export default Admin;
