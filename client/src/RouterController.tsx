import { Navigate, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./components/collections/Collections";
import SingleProduct from "./components/single_product/SingleProduct";
import Login from "./components/Login/Login";
import Admin from "./components/admin/Admin";
import ManageProducts from "./components/admin/manage-products/ManageProducts";
import Create from "./components/admin/manage-products/create/Create";
import Edit from "./components/admin/manage-products/edit/Edit";
import Products from "./components/admin/manage-products/products/Products";
import Users from "./components/admin/Users/Users";
import Like from "./components/like/Like";
const RouterController = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:collection-name" element={<Collections />} />
        <Route path="/collection/:collection-name/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/like" element={<Like />} />
        <Route path="/admin" element={<Admin />}>
        <Route path="/admin" element={<Navigate to="manage-products" replace />} />
          <Route path="manage-products" element={<ManageProducts />}>
        <Route path="/admin/manage-products" element={<Navigate to="products" replace />} />
          <Route path="create" element={<Create />} />
          <Route path="edit" element={<Edit />} />
          <Route path="products" element={<Products />} />
          </Route>
          <Route path="users" element={<Users/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default RouterController
