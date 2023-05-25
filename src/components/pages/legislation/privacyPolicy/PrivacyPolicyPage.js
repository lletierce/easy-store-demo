import PrivacyPolicyContent from './PrivacyPolicyContent'
import FooterLegislationPage from '../../../reusable-ui/footer/FooterLegislationPage'

export default function PrivacyPolicyPage() {
  return (
    <FooterLegislationPage title={"Privacy Policy"} content={<PrivacyPolicyContent />}/>
  )
}