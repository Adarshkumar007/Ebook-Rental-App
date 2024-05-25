import { Container } from "react-bootstrap";
import logo from "../../images/logo.png";
const Privacy = () => {
  return (
    <Container>
      <div className="aboutus-container px-4 py-1 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt="RentReader"
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">
          Welcome To RentReader
        </h1>

        <div>
          <span className="side-heading badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill">
            Privacy Policy
          </span>
          <div className="aboutus-text">
            Effective Date: 2024
            <br /> <br />
            RentReaders values your privacy and is committed to protecting your
            personal information. This Privacy Policy outlines how we collect,
            use, disclose, and safeguard your information when you visit our
            website [www.rentreaders.com] (the "Site") and use our services.
          </div>
        </div>

        <div>
          <span className="side-heading badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill">
            Information We Collect
          </span>
          <div className="aboutus-text">
            <ul>
              <li>
                <b> Personal Information:</b> When you register on our site,
                subscribe to our services, or interact with us, we may collect
                personal information such as your name, email address (e.g.,
                readerrent@gmail.com), postal address, phone number, and payment
                information.
              </li>
              <li>
                <b>Usage Data:</b> We may collect information about your
                interaction with our Site, including IP addresses, browser type,
                pages visited, and the duration of your visit.
              </li>
              <li>
                <b>Cookies:</b> We use cookies and similar tracking technologies
                to enhance your browsing experience, analyze usage patterns, and
                personalize content and advertisements.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill">
            How We Use Your Information
          </span>
          <div className="aboutus-text">
            <ul>
              <li>
                <b> To Provide Services:</b> We use your information to operate,
                maintain, and improve our services, including fulfilling orders
                and subscriptions, processing payments, and delivering customer
                support.
              </li>
              <li>
                <b>Personalization: </b> We may use your information to
                personalize your experience, such as recommending books based on
                your interests and preferences.
              </li>
              <li>
                <b>Communication:</b> We may use your contact information to
                send you updates, newsletters, promotional offers, and other
                communications related to our services.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill">
            Disclosure of Your Information
          </span>
          <div className="aboutus-text">
            <ul>
              <li>
                <b> Service Providers:</b> We may share your information with
                third-party service providers who assist us in operating our
                website, conducting business, or servicing you.
              </li>
              <li>
                <b>Legal Compliance: </b> We may disclose your information when
                required by law, to enforce our site policies, or to protect our
                rights, property, or safety.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <span className="side-heading badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill">
            Security of Your Information
          </span>
          <div className="aboutus-text">
            We implement a variety of security measures to maintain the safety
            of your personal information. However, no method of transmission
            over the internet or electronic storage is completely secure.
            Therefore, while we strive to use commercially acceptable means to
            protect your information, we cannot guarantee its absolute security.
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill">
            Your Choices and Rights
          </span>
          <div className="aboutus-text">
            <ul>
              <li>
                <b> Opt-Out: </b> You can opt-out of receiving promotional
                communications from us by following the unsubscribe instructions
                provided in the email.
              </li>
              <li>
                <b>Access and Correction: </b> You may access and update your
                personal information by logging into your account settings or
                contacting us directly.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill">
            Changes to This Privacy Policy
          </span>
          <div className="aboutus-text">
            We reserve the right to update or modify this Privacy Policy at any
            time. We will notify you of any changes by posting the revised
            policy on this page with an updated effective date.
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill">
          Contact Us
          </span>
          <div className="aboutus-text">
          If you have any questions about this Privacy Policy or our practices, please contact us at [contact@rentreaders.com].
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Privacy;
