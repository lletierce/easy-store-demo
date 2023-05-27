import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/home/HomePage"
import ErrorPage from "./components/pages/error/ErrorPage"
import TermsAndConditionsPage from "./components/pages/legislation/termsAndConditions/TermsAndConditionsPage"
import PrivacyPolicyPage from "./components/pages/legislation/privacyPolicy/PrivacyPolicyPage"
import ShippingAndRefundsPage from "./components/pages/legislation/shippingAndRefunds/ShippingAndRefundsPage"
import LegalMentionsPage from "./components/pages/legislation/legalMentions/LegalMentionsPage"
import FAQPage from "./components/pages/legislation/faq/FAQPage"
import ContactUsPage from "./components/pages/legislation/contactUs/ContactUsPage"
import ScrollToTop from "./utils/ScrollToTop"

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/terms-of-services" element={<TermsAndConditionsPage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
        <Route path="/shipping-payment-info" element={<ShippingAndRefundsPage/>}/>
        <Route path="/legal-mentions" element={<LegalMentionsPage/>}/>
        <Route path="/f-a-q" element={<FAQPage/>}/>
        <Route path="/contact" element={<ContactUsPage/>}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;