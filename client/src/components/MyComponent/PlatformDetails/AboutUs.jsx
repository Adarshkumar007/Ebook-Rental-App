import { Container } from "react-bootstrap";
import logo from "../../images/logo.png";

const AboutUs = () => {
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
          <span className="side-heading badge bg-info-subtle border border-info-subtle text-info-emphasis rounded-pill">
            About Us
          </span>
          <div className="aboutus-text">
            Welcome to RentReaders, your premier destination for exploring and
            experiencing the world of books like never before. At RentReaders,
            we believe in making reading accessible, affordable, and delightful
            for everyone. Whether you're an avid reader, a casual book
            enthusiast, or a publisher looking to share your literary creations,
            RentReaders is your platform of choice.
          </div>
        </div>

        <div>
          <span className="side-heading badge bg-info-subtle border border-info-subtle text-info-emphasis rounded-pill">
            Our Mission
          </span>
          <div className="aboutus-text">
            Our mission at RentReaders is to revolutionize the way books are
            accessed and enjoyed. We aim to provide a diverse library of books
            that cater to every interest and age group, offering both digital
            subscriptions and options to purchase hard copies. By leveraging
            technology and innovation, we strive to create a seamless and
            engaging reading experience for our users.
          </div>
        </div>

        <div>
          <span className="side-heading badge bg-info-subtle border border-info-subtle text-info-emphasis rounded-pill">
            What We Offer
          </span>
          <div className="aboutus-text">
            <ul>
              <li>
                <b> Extensive Selection:</b> Explore a wide range of books
                across genres, age groups, and interests. From timeless classics
                to the latest bestsellers, RentReaders has something for
                everyone.
              </li>
              <li>
                <b>Subscription Flexibility:</b> Choose from flexible
                subscription plans that allow you to rent books for a specified
                period, providing cost-effective access to a wealth of literary
                content.
              </li>
              <li>
                <b>User-Centric Features:</b> Enjoy personalized recommendations
                based on your reading preferences, seamless navigation through
                categorized book listings, and the ability to preview books
                before making a decision.
              </li>
              <li>
                <b>Community Engagement:</b> Engage with fellow readers through
                our review and feedback system, where you can share your
                thoughts on books, discover new titles, and connect with
                like-minded individuals.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <span className="side-heading badge bg-info-subtle border border-info-subtle text-info-emphasis rounded-pill">
            For Publishers
          </span>
          <div className="aboutus-text">
            RentReaders also offers a robust platform for publishers to showcase
            their books, set subscription plans, and interact directly with
            readers. We support publishers in reaching a global audience,
            ensuring their literary works receive the attention they deserve.
          </div>
        </div>

        <div>
          <span className="side-heading badge bg-info-subtle border border-info-subtle text-info-emphasis rounded-pill">
            Our Commitment
          </span>
          <div className="aboutus-text">
            At RentReaders, we are committed to excellence in service, user
            satisfaction, and fostering a love for reading. Whether you're here
            to discover your next favorite book or to share your literary
            creations with the world, we are here to make your experience
            seamless and enjoyable. <br/><br/>Join us at RentReaders and embark on a
            journey where books come alive, imagination thrives, and reading
            knows no boundaries.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
