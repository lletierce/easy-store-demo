import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/home/HomePage"
import ErrorPage from "./components/pages/error/ErrorPage"
import TermsAndConditionsPage from "./components/pages/legislation/TermsAndConditionsPage"
import PrivacyPolicyPage from "./components/pages/legislation/PrivacyPolicyPage"
import ShippingAndRefundsPage from "./components/pages/legislation/ShippingAndRefundsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/terms-of-services" element={<TermsAndConditionsPage/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
      <Route path="/shipping-payment-info" element={<ShippingAndRefundsPage/>}/>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
  );
}

export default App;
