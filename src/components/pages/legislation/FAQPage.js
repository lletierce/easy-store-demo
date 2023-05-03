import styled from 'styled-components'
import Header from '../home/Header'
import Footer from '../home/Footer'
import Title from '../../reusable-ui/Title'
import { theme } from '../../../theme'

export default function FAQPage() {
  return (
    <FAQPageStyled>
        <Header/>
        <div className='content'>
            <Title value={"F.A.Q"} className={"title-faq"}/> 
            <div>
                <p>
                    <strong>What kind of payment methods do you accept?</strong>
                    <br/>
                    We are currently only accepting payments through Paypal. 
                    <br/>
                    <br/>
                    <strong>How long can items stay in my shopping cart?</strong>
                    <br/>
                    The items can stay in your cart until they are not available for purchases anymore on the website.
                    <br/>
                    <br/>
                    <strong>Is my order shipped? Where can I check on the status of my order?</strong>
                    <br/>
                    We will notify you by email once your order have been shipped, and if you received a tracking number you can follow your parcel at: https://www.chronopost.fr/en/private/track-your-parcel 
                    <br/>
                    <br/>
                    <strong>I haven't received my items yet, what do I do?</strong>
                    <br/>
                    The best thing to do is to make sure you order with a tracking number so that you can keep up to date with the delivery status. If there are any issues or delays once the products are shipped, you will need to take it up with the carrier yourself. If the order has not been shipped within 7 of ordering, please contact us at letierce.lo@gmail.com for more information.
                    <br/>
                    <br/>
                    <strong>I purchased digital goods - where can I access those files?</strong>
                    <br/>
                    All digital goods will be sent to the email associated with the order - please make sure you are able to access this mailbox, and check your junk and filtered folders.
                    <br/>
                    <br/>
                    <strong>Where can I contact someone?</strong>
                    <br/>
                    You can send an email to letierce.lo@gmail.com  for important questions or concerns regarding your orders. We will usually respond within 3 business days.
                    <br/>
                    <br/>
                    <strong>I want to exchange or refund my item, how can I do that?</strong>
                    <br/>
                    Exchanges can only be done within the fourteen day limit specified in Shipping & Refunds, and items must be in their original packaging, unopened, and in like-new quality. The customer will also be responsible for all shipping fees, both to return and replace if applicable.


                </p>
            </div>
        </div>
        <Footer/>
    </FAQPageStyled>
  )
}

const FAQPageStyled = styled.div`
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

    .title-faq{
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