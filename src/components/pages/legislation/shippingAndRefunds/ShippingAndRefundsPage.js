import FooterLegislationPage from '../../../reusable-ui/footer/FooterLegislationPage'
import ShippingAndRefundsContent from './ShippingAndRefundsContent'

export default function ShippingAndRefundsPage() {
  return (
    <FooterLegislationPage title={"Shipping & Refunds"} content={<ShippingAndRefundsContent/>}/>
  )
}