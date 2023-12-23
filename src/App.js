import { useState } from "react";
import { useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./Components/UI/Loading/Loading";
import YandexMap from "./Components/YandexMap/YandexMap";
import AddCard from "./Pages/AddCard/AddCard";
import Additional from "./Pages/Aditional/Additional";
import Authorization from "./Pages/Authorization/Authorization";
import Code from "./Pages/Authorization/CodeSms";
import NameFirstMame from "./Pages/Authorization/NameFirstName";
import BottomDraver from "./Pages/BottomDrawer/BottomDrawer";
import CarSearch from "./Pages/CarSearch/CarSearch";
import Confirm from "./Pages/Confirm/Confirm";
import DarkTheme from "./Pages/DarkTheme/DarkTheme";
import Discount from "./Pages/Discount/Discount";
import Email from "./Pages/E-mail/E-mail";
import Emergency from "./Pages/Emergency/Emergency";
import Family from "./Pages/Family/Family";
import Forgotten from "./Pages/Forgotten/Forgotten";
import Happened from "./Pages/Happened/Happened";
import HistoryAl from "./Pages/historyAll/HistoryAl";
import Information from "./Pages/Information/Information";
import LastOrder from "./Pages/LastOrder/LastOrder";
import MyAddresses from "./Pages/MyAddresses/MyAddresses";
import Order from "./Pages/Order/Order";
import Partners from "./Pages/Partners/Partners";
import PaymentMethod from "./Pages/PaymentMethod/PaymentMethod";
import Police from "./Pages/Police/Police";
import Profile from "./Pages/Profile/Profile";
import Rate from "./Pages/Rate/Rate";
import Setting from "./Pages/Safety/Safety";
import Settings from "./Pages/Settings/Settings";
import SupportDetial from "./Pages/SupportDetial/SupportDetial";
import SupportService from "./Pages/SupportService/SupportService";
import TrustedContacts from "./Pages/TrustedContacts/TrustedContacts";

function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="app">
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Routes>
          <Route path="salam" element={<BottomDraver/>}/>
          <Route path="/" element={<YandexMap />} />
          <Route path="family-account" element={<Family />} />
          <Route path="add-card" element={<AddCard />} />
          <Route path="safety" element={<Setting />} />
          <Route path="police" element={<Police />} />
          <Route path="trusted-contacts" element={<TrustedContacts />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="happened" element={<Happened />} />
          <Route path="forgotten" element={<Forgotten />} />
          <Route path="histori-al" element={<HistoryAl />} />
          <Route path="payment-method" element={<PaymentMethod />} />
          <Route path="discount" element={<Discount />} />
          <Route path="settings" element={<Settings />} />
          <Route path="dark-theme" element={<DarkTheme />} />
          <Route path="order" element={<Order />} />
          <Route path="profile" element={<Profile />} />
          <Route path="confirm" element={<Confirm />} />
          <Route path="email" element={<Email />} />
          <Route path="my-adress" element={<MyAddresses />} />
          <Route path="support-service" element={<SupportService />} />
          <Route path="support-detial" element={<SupportDetial />} />
          <Route path="addtitional" element={<Additional />} />
          <Route path="last-order" element={<LastOrder />} />
          <Route path="information" element={<Information />} />
          <Route path="pertners" element={<Partners />} />
          <Route path="rate" element={<Rate />} />
          <Route  path="car-search" element={<CarSearch/>}/>
          <Route path="authorization" element={<Authorization/>}/>
          <Route path="code" element={<Code/>}/>
          <Route path="name" element={<NameFirstMame/>}/>

        </Routes>
      )}
    </div>
  );
}

export default App;
