import styled from 'styled-components'
import Header from '../home/Header'
import Footer from '../home/Footer'
import { theme } from '../../../theme'
import Title from '../../reusable-ui/Title'

export default function ShippingAndRefundsPage() {
  return (
    <ShippingAndRefundsPageStyled>
      <Header/>
      <div className="content">
      <Title value={"Shipping & Refunds"} className={"title-shippingAndRefunds"}/>
        <div>
          <p>
            <strong>Exchange policy</strong>
            <br/>
            Any request for exchange must be requested within fourteen (14) days after the date of receipt by the customer by email to the following address: letierce.lo@gmail.com
            <br/>
            <br/>
            The Product must be in its original packaging in perfect condition and ready to be marketed again. Return costs remain the responsibility of the customer. The http://www.easy-store site reserves the right to refuse any exchange request that is abusive or initiated after the deadline. Please contact us for the return address.
            <br/>
            <br/>
            Damaged, soiled or incomplete Products are not taken back.
            <br/>
            <br/>
            The exchange (subject to availability) or refund will be made within 14 days of receipt by the Seller of the Products returned by the Customer under the conditions provided for in this article.
            <br/>
            <br/>
            NB: Personalized Products cannot be taken back or exchanged. The right of withdrawal also does not apply. The name indicated for personalization by the buyer is under his sole responsibility and Loris LETIERCE disclaims all liability in the event of an error on it. Personalization cannot exceed 10 characters and can only contain letters A-Z and numbers.
            <br/>
            <br/>
            The return costs remain the responsibility of the Customer.
            <br/>
            <br/>
            -----
            <br/>
            <br/>
            To complete your return, we will require a receipt or proof of purchase.
            <br/>
            Please do not send your purchase back to the manufacturer unless instructed.
            <br/>
            <br/>
            <strong>Refunds</strong>
            <br/>
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
            <br/>
            If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
            <br/>
            <br/>
            <strong>Late or missing refunds</strong>
            <br/>
            If you haven’t received a refund yet, first check your bank account again.
            <br/>
            Then contact your credit card company, it may take some time before your refund is officially posted.
            <br/>
            Next contact your bank. There is often some processing time before a refund is posted.
            <br/>
            If you’ve done all of this and you still have not received your refund yet, please contact us at letierce.lo@gmail.com.
            <br/>
            <br/>
            <strong>Shipping</strong>
            <br/>
            To return your product, please contact us at letierce.lo@gmail.com for a return address.
            <br/>
            <br/>
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
            <br/>
            <br/>
            Depending on where you live, the time it may take for your exchanged product to reach you, may vary.
            <br/>
            <br/>
            If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.
            <br/>
            <br/>
            Additional non-returnable items:
            <br/>
            * Digital products.
            <br/>
            <br/>
            ⚠️ - Due to the COVID-19 crisis, there may still be unexpected delays or extended shipping times.
            <br/>
            ⚠️ - During holidays there may be a longer delay in shipping because of the increased volume of parcels being sent out.
            <br/>
            ⚠️ - Customs fees at the border, if they occur, are entirely the responsibility of the customer.
            <br/>
            <br/>
            <strong>Shipping Information</strong>
            <br/>
            Orders are shipped within 10 days after receipt of the full payment (the only exception to this are Pre-Orders, which estimated shipping time can be found in the product description).
            <br/>
            <br/>
            Orders are shipped internationally, using the french postal services Chronopost. They do NOT automatically contain tracking nor insurance.
            <br/>
            <br/>
            -To have a TRACKED ORDER, YOU MUST PURCHASE TRACKING AS AN OPTION using the product listing ‘Tracked Shipping Option’. It is NOT included in basic shipping. If you need an insured shipment, please contact us.
            <br/>
            <br/>
            Shipping fees include packing fees as well as shipping cost.
            <br/>
            <br/>
            Every order is prepared with care and deposited at the post office by ourselves. For that reason, it may take time before we can send out your order.
            <br/>
            <br/>
            <strong>Damaged or Lost Goods</strong>
            <br/>
            We will not take responsibility for any damage or loss that occurs during shipping due to fault or neglect caused by the carrier.

          </p>
        </div>
      </div>
      <Footer/>
    </ShippingAndRefundsPageStyled>
  )
}

const ShippingAndRefundsPageStyled = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:  "header"
                        "maincontent"
                        "footer";
  grid-template-rows:    64px 1fr 132px;

  .content{
    max-width: 1200px;
    height: max-content;
    
    margin: 0 auto 100px;
    padding: 21px 15px;

    .title-shippingAndRefunds{
      margin: 0 0 40px;
      font-size: 52px;
      text-transform: capitalize;
      letter-spacing: 0.6px;

      @media screen and (max-width: 749px) {
        font-size: 40px;
        margin-bottom: 30px;
    }

    }

    p{
      font-family: ${theme.fonts.family.primary};
      color: rgba(18, 18, 18, 0.75);
      font-size: ${theme.fonts.size.SM};
      line-height: 27px;
      font-weight: ${theme.fonts.weights.regular};
      letter-spacing: 0.6px;

      margin-top: 0;

    }
  }

  @media screen and (min-width: 750px) {

    .content{
      padding: 28px 90px;
      
      p{
        font-size: ${theme.fonts.size.P0};
        line-height: 28.8px;
      }
    }
  }

  @media screen and (min-width: 990px) {
    grid-template-rows: 84px 1fr 132px;

    .content{
      max-width: 726px;
      padding: 28px 0;
    }
  }
`;