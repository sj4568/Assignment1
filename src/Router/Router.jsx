import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Tamplate from "../Tamplate/Tamplate"
import Home from "../Page/Home"
import Resister from "../Page/Resister"
import Login from "../Page/Login"
import Profile from "../Page/Profile"
import AuthUser from "../components/Auth/AuthUser"


 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<Tamplate />}>
       <Route path="/" element={<AuthUser />} >
         <Route index element={<Home/>}/>
       </Route>
       <Route path="/login" element={<Login />} />
       <Route path="/profile/:id" element={<Profile />} />
     </Route>
   )
 );

export default router