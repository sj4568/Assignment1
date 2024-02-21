import CheckOut from "../Checkout/CheckOut";
import Home from "../Pages/Home/Home";
import ShowBox from "../Pages/ShowBox/ShowBox";
import ProductStore from "../ProductStore/ProductStore";
import Template from "../Template/Template";

import { createBrowserRouter,createRoutesFromElements,Route} from  "react-router-dom"
import Form from "../User/LoginOrSignUp/Form";
import AuthUser from "../AuthUser/AuthUser";
import Profile from "../Profile/Profile";
import Admin from "../Admin/Admin";
import CompleteOrder from "../Checkout/CompleteOrder/CompleteOrder";
import ReviewFull from "../ShowBox/Review/ReviewContainer/ReviewFull/ReviewFull";
import Contect from "../Contect/Contect";
import IsLogedIn from "../AuthUser/IsLogedIn";
import AuthAdmin from "../AuthAdmin/AuthAdmin";
import PageNotFound from "../NotFound/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Template />}>
      <Route index element={<Home />} />
      <Route path="/showbox" element={<ShowBox />} />
      <Route path="/store" element={<ProductStore />} />
      <Route path="/" element={<IsLogedIn />}>
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/completeorder" element={<CompleteOrder />} />
      </Route>

      <Route path="/review" element={<ReviewFull />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/contect" element={<Contect />} />

      <Route path="/admin" element={<AuthAdmin />}>
        <Route index element={<Admin />} />
      </Route>
      <Route path="/login" element={<AuthUser />}>
        <Route index element={<Profile />} />
      </Route>
    </Route>
  )
);
export default router