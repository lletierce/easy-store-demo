import FooterLegislationPage from '../../../reusable-ui/footer/FooterLegislationPage'
import TermsAndConditionsContent from './TermsAndConditionsContent'

export default function TermsAndConditionsPage() {
  return (
    <FooterLegislationPage title={"Terms & Conditions"} content={<TermsAndConditionsContent />}/>
  )
}