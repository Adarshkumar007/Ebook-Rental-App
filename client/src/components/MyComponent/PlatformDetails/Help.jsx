import { Container } from "react-bootstrap";
import logo from "../../images/logo.png";
const Help = () => {
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
          <span className="side-heading badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill">
            24x7 Help
          </span>
          <div className="aboutus-text">
            At RentReaders, we understand the importance of providing continuous
            support to our users. That's why we offer 24x7 help to ensure you
            have the assistance you need, whenever you need it. Whether you have
            a question about your subscription, need technical support, or have
            any other inquiries, our dedicated team is here to help around the
            clock.
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill">
            How to Reach Us
          </span>
          <div className="aboutus-text">
            <ol type="1">
              <li className="security-points">
                <b>Email Support:</b>
                <br />
                You can email us anytime at readerrent@gmail.com for any support
                or inquiries. Our team strives to respond to all emails within a
                few hours, no matter the time of day.
              </li>
              <li className="security-points">
                <b>Live Chat:</b>
                <br />
                Our live chat support is available 24x7 on our website. Simply
                click the chat icon at the bottom right corner of any page to
                start a conversation with one of our support representatives. We
                are here to assist you in real-time.
              </li>
              <li className="security-points">
                <b> Phone Support:</b>
                <br />
                You can reach our customer service team by phone at
                +1-800-555-1234. Our phone lines are open 24x7 to provide you
                with immediate assistance.
              </li>
              <li className="security-points">
                <b>Help Center:</b>
                <br />
                Visit our Help Center for a comprehensive library of articles,
                tutorials, and FAQs that cover a wide range of topics. You can
                find quick answers to common questions and step-by-step guides
                to help you make the most of RentReaders.
              </li>
              <li className="security-points">
                <b> Social Media:</b>
                <br />
                Connect with us on our social media platforms. Our support team
                monitors our social media channels around the clock and is ready
                to assist you with any inquiries or issues.
                <ul>
                  <li className="security-points">
                    <b>Facebook</b>
                  </li>
                  <li className="security-points">
                    <b>Twitter</b>
                  </li>
                  <li className="security-points">
                    <b>Instagram</b>
                  </li>
                </ul>
              </li>
              <li className="security-points">
                <b>Contact Form:</b>
                <br />
                Fill out our Contact Form on the website, and we will get back
                to you as soon as possible. Please provide as much detail as you
                can about your issue to help us assist you better.
              </li>
              <li className="security-points">
                <b>Mobile App Support:</b>
                <br />
                If you are using our mobile app, you can access support directly
                from the app. Go to the "Help" section and choose your preferred
                method of contact – email, chat, or phone.
              </li>
            </ol>
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill">
            What We Can Help With
          </span>
          <div className="aboutus-text">
            <ul>
              <li className="security-points">
                Subscription and billing inquiries
              </li>
              <li className="security-points">
                Technical support and troubleshooting
              </li>
              <li className="security-points">Account management</li>
              <li className="security-points">
                Book discovery and recommendations
              </li>
              <li className="security-points">Feedback and feature requests</li>
              <li className="security-points">
                Any other questions or concerns
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill">
            Our Commitment
          </span>
          <div className="aboutus-text">
            We are committed to providing exceptional support to our users. Your
            satisfaction is our top priority, and we continuously strive to
            improve our support services. No matter the issue, big or small, we
            are here to help you 24 hours a day, 7 days a week.<br/><br/> Thank you for
            choosing RentReaders. We look forward to assisting you and ensuring
            you have the best reading experience possible.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Help;
