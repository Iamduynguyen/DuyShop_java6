import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListProduct from "./pages/admin/product/list";
import ListCategory from "./pages/admin/category/list";
import ListUser from "./pages/admin/user/list";
import ListProductClient from "./pages/website/list";
import DetailProduct from "./pages/website/detailProduct";
import ListProductClientShop from "./pages/website/shop";
import ProductSearch from "./pages/website/productSearch";
import UserClient from "./pages/website/user";
import ContactClient from "./pages/website/contact";
import Cart from "./pages/website/cart";
import ListCategoryIdClientShop from "./pages/website/CategoryIdShop";
import AddProductForm from "./pages/admin/product/add";
import AddCategoryForm from "./pages/admin/category/add";
import EditCategoryForm from "./pages/admin/category/edit";
import EditProductForm from "./pages/admin/product/edit";
import AdminLayout from "./layouts/AdminLayout";
import AdminRoute from "../src/auth/adminRoute";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Signup from "./pages/website/signup";
import Signin from "./pages/website/signin";
const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
      <AdminRoute path="/admin">
          <AdminLayout>
            <Switch>
              <Route exact path="/admin/category">
                <ListCategory {...props} />
              </Route>
              <Route exact path="/admin/category/add">
                <AddCategoryForm {...props} />
              </Route>
              <Route exact path="/admin/category/:id/edit">
                <EditCategoryForm {...props} />
              </Route>
              <Route exact path="/admin/product">
                <ListProduct {...props} />
              </Route>
              <Route exact path="/admin/product/add">
                <AddProductForm {...props} />
              </Route>
              <Route exact path="/admin/product/:id/edit">
                <EditProductForm {...props} />
              </Route>
              <Route exact path="/admin/user">
                <ListUser {...props} />
              </Route>
            </Switch>
          </AdminLayout>
        </AdminRoute>
        <Route path="/">
          <WebsiteLayout exact path="/" {...props}>
            <Switch>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
              <Route exact path="/">
                <ListProductClient  />
              </Route>
              <Route exact path="/shop">
                <ListProductClientShop  {...props}/>
              </Route>
              <Route exact path="/shop/search">
                <ProductSearch  />
              </Route>
              <Route exact path="/shop/:id">
                <ListCategoryIdClientShop  {...props}/>
              </Route>
              <Route exact path="/detailProduct/:id/categoryId/:categoryId">
                <DetailProduct {...props} />
              </Route>
              <Route exact path="/user">
                <UserClient  />
              </Route>
              <Route exact path="/contact">
                <ContactClient  />
              </Route>
              <Route exact path="/cart">
                <Cart  {...props}/>
              </Route>
            </Switch>
          </WebsiteLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
