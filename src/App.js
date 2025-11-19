import { Routes,Route, Link } from "react-router-dom";
import MyCart from "./Pages/MyCart/MyCart"
import CheckOut from "./Pages/CheckOut/CheckOut"
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import OrderConfirmation from "./Pages/OrderConfirmation/OrderConfirmation";
import CustomerHom from "./Pages/CustomerHome/CustomerHom";
import SettingPage from "./Pages/SettingPage/SettingPage";
import CustomerOrders from "./Pages/CustomerOrders/CustomerOrders";
import CustomerReviews from "./Pages/CustomerReviews/CustomerReviews";
import Support from "./Pages/Support/Support";
import CustomerChat from "./Pages/CustomerChat/CustomerChat";
import Favourite from "./Pages/Favourite/Favourite";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import Vendor from "./Pages/Vendor/Vendor";
import WelcomeForm from "./components/WelcomeForm/WelcomeForm";
import LogIn from "./Pages/LogIn/LogIn";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import SignUp from "./Pages/SignUp/SignUp";
import Password from "./Pages/Password/Password";
import CustomerNotification from "./Pages/CustomerNotification/CustomerNotification";
import CustomerProfile from "./Pages/CustomerProfile/CustomerProfile";
import AccountInfo from "./Pages/AccountInfo/AccountInfo";
import Proppage from "./Pages/Proppage/Proppage";

function App() {
  return (
   <> 
  <Routes>
    <Route path="/profile" element={<CustomerProfile/>}/>
    <Route path="/notification" element={<CustomerNotification/>}/>
    <Route path="/password" element={<Password/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/forget" element={<ForgetPassword/>}/>
    <Route path="/login" element={<LogIn/>}/>
    <Route path="/" element={<Vendor/>}/>
    <Route path="/home" element={<CustomerHom/>}/>
    <Route path="/favourite" element={<Favourite/>}/>
    <Route path="/mycart" element={<MyCart/>} />
    <Route path="/checkout" element={<CheckOut/>}/>
    <Route path="/singleproduct" element={<SingleProduct/>}/>
    <Route path="/orderconfirm" element={<OrderConfirmation/>}/>
    <Route path="/customerorders" element={<CustomerOrders/>}/>
    <Route path="/track" element={<TrackOrder/>}/>
    <Route path="/customerreviews" element={<CustomerReviews/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="/chat" element={<CustomerChat/>}/>
    <Route path="/setting" element={<SettingPage/>}/>
    <Route path="/accountinfo" element={<AccountInfo/>}/>
  </Routes> 
   </>
  );
}
export default App;

