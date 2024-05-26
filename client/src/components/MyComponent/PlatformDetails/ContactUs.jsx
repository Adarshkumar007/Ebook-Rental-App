import { Container } from "react-bootstrap";
import logo from "../../images/logo.png";
const ContactUs = () => {
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
          <span className="side-heading badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill">
            Contact Us
          </span>
          <div className="aboutus-text">
            At RentReaders, we are always here to help and support you. Whether
            you have a question about our services, need assistance with your
            subscription, or just want to share your feedback, we would love to
            hear from you. Please feel free to reach out to us through any of
            the following channels:
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill">
            Email
          </span>
          <div className="aboutus-text">
            You can email us at readerrent@gmail.com for any inquiries, support,
            or feedback. We strive to respond to all emails within 24 hours.
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill">
            Phone
          </span>
          <div className="aboutus-text">
            If you prefer to speak with us directly, please call us at
            +1-800-555-1234. Our customer service representatives are available
            Monday to Friday, from 9:00 AM to 6:00 PM (EST).
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill">
            Mailing Address
          </span>
          <div className="aboutus-text">
            You can also reach us via mail at the following address: <br />
            RentReaders
            <br />
            123 Book Lane
            <br /> Reading City, RC 12345
            <br /> USA
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill">
            Social Media
          </span>
          <div className="aboutus-text">
            Stay connected with us through our social media channels for the
            latest updates, promotions, and news:
            <ul>
              <li>
                <b>Facebook</b>
              </li>
              <li>
                <b>Twitter</b>
              </li>
              <li>
                <b>Instagram</b>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill">
            Submit
          </span>
          <div className="aboutus-text">
            <b>Frequently Asked Questions (FAQs):</b><br/> For quick answers to common
            questions, please visit our FAQ page. <br/> <br/> Thank you for choosing
            RentReaders. We look forward to assisting you and enhancing your
            reading experience!
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ContactUs;
