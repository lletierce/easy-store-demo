import styled from 'styled-components'
import Header from '../home/Header'
import Footer from '../home/Footer'
import Title from '../../reusable-ui/Title'
import { theme } from '../../../theme'

export default function PrivacyPolicyPage() {
  return (
    <PrivacyPolicyPageStyled>
        <Header/>
        <div class="content">
            <Title value={"Privacy Policy"} className={"title-privacyPolicy"}/>
            <div>
                <p>
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from https://easy-store (the “Site”).
                <br/>
                <br/>
                <strong>PERSONAL INFORMATION WE COLLECT</strong>
                <br/>
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
                <br/>
                <br/>
                <u>We collect Device Information using the following technologies</u> : 
                <br/>
                <br/>
                - “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
                <br/>
                - “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                <br/>
                - “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
                <br/>
                <br/>
                Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as “Order Information.”
                <br/>
                <br/>
                When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
                <br/>
                <br/>
                <strong>HOW DO WE USE YOUR PERSONAL INFORMATION</strong>
                <br/>
                We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
                <br/>
                Communicate with you;
                <br/>
                Screen our orders for potential risk or fraud; and
                <br/>
                When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
                <br/>
                <br/>
                We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                <br/>
                <br/>
                We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use undefined to power our online store--you can read more about how undefined uses your Personal Information here: https://www.undefined.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.
                <br/>
                <br/>
                Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
                <br/>
                <br/>
                As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
                <br/>
                <br/>
                Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: http://optout.aboutads.info/.
                <br/>
                <br/>
                <strong>DO NOT TRACK</strong>
                <br/>
                Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
                <br/>
                <br/>
                <strong>YOUR RIGHTS</strong>
                <br/>
                If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
                <br/>
                Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
                <br/>
                <br/>
                <strong>DATA RETENTION</strong>
                <br/>
                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
                <br/>
                <br/>
                <strong>MINORS</strong>
                <br/>
                The Site is not intended for individuals under the age of 18.
                <br/>
                <br/>
                <strong>CHANGES</strong>
                <br/>
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                <br/>
                <br/>
                <strong>CONTACT US</strong>
                <br/>
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at letierce.lo@gmail.com
                </p>
            </div>
        </div>
        <Footer/>
    </PrivacyPolicyPageStyled>
  )
}

const PrivacyPolicyPageStyled = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas:"header"
                        "maincontent"
                        "footer";
    grid-template-rows:    64px 1fr 132px;


    .content{
        max-width: 1200px;
        height: max-content;
    
        margin: 0 auto 100px;
        padding: 21px 15px;

        .title-privacyPolicy{
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
