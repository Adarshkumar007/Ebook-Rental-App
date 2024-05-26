import { Container } from "react-bootstrap";
import logo from "../../images/logo.png";
const Security = () => {
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
          <span className="side-heading badge bg-secondary-subtle border border-secondary-subtle text-secondary-emphasis rounded-pill">
            Security
          </span>
          <div className="aboutus-text">
            At RentReaders, we take your security seriously. We are committed to
            protecting the information you share with us and ensuring a safe and
            secure environment for all our users. Here are the measures we take
            to safeguard your data:
            <ol type="1">
              <li className="security-points">
                <b> Data Encryption:</b>
                <br />
                We use industry-standard encryption protocols to protect your
                personal and financial information. All data transmitted between
                your browser and our servers is encrypted using Secure Socket
                Layer (SSL) technology.
              </li>
              <li className="security-points">
                <b>Secure Payment Processing:</b>
                <br />
                We have partnered with trusted payment gateways, such as
                Razorpay, to handle all payment transactions. These gateways
                comply with the highest security standards, including Payment
                Card Industry Data Security Standard (PCI DSS), to ensure your
                payment information is securely processed.
              </li>
              <li className="security-points">
                <b> Account Security:</b>
                <br />
                To protect your account, we employ robust authentication
                mechanisms. This includes secure password storage, requiring
                strong passwords, and offering multi-factor authentication (MFA)
                for added security.
              </li>
              <li className="security-points">
                <b>Regular Security Audits:</b>
                <br />
                We conduct regular security audits and vulnerability assessments
                to identify and address potential security risks. Our team stays
                updated with the latest security practices and implements
                necessary measures to protect our systems and data.
              </li>
              <li className="security-points">
                <b> Data Privacy:</b>
                <br />
                We respect your privacy and are committed to protecting your
                personal information. Our Privacy Policy outlines how we
                collect, use, and safeguard your data. We do not share your
                personal information with third parties without your explicit
                consent, except as required by law.
              </li>
              <li className="security-points">
                <b> Access Controls:</b>
                <br />
                We implement strict access controls to ensure that only
                authorized personnel have access to sensitive information. This
                helps prevent unauthorized access, data breaches, and misuse of
                data.
              </li>
              <li className="security-points">
                <b> Secure Development Practices:</b>
                <br />
                Our development team follows secure coding practices to minimize
                vulnerabilities in our software. We regularly update our systems
                and applications to protect against known security threats.
              </li>
              <li className="security-points">
                <b>Incident Response:</b>
                <br />
                In the event of a security incident, we have a dedicated
                incident response team to promptly address and mitigate any
                issues. We will notify affected users and take appropriate
                actions to prevent future occurrences.
              </li>
            </ol>
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-secondary-subtle border border-secondary-subtle text-secondary-emphasis rounded-pill">
            Your Role in Security
          </span>
          <div className="aboutus-text">
            While we take significant measures to protect your data, your
            actions also play a crucial role in maintaining security. Here are
            some tips to help you protect your account:
            <ul>
              <li className="security-points">
                Use a strong, unique password for your RentReaders account.
              </li>
              <li className="security-points">
                Enable multi-factor authentication (MFA) if available.
              </li>
              <li className="security-points">
                Be cautious of phishing attempts and do not share your login
                credentials with anyone.
              </li>
              <li className="security-points">
                Keep your device's software and antivirus programs up to date.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className="side-heading badge bg-secondary-subtle border border-secondary-subtle text-secondary-emphasis rounded-pill">
            Contact Us
          </span>
          <div className="aboutus-text">
            If you have any questions or concerns about security, or if you
            suspect any security issues, please contact us immediately at
            readerrent@gmail.com. <br/> <br/> Thank you for trusting RentReaders. We are
            dedicated to providing a secure and reliable platform for your
            reading enjoyment.
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Security;
