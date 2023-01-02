import cole from "./assets/cole.png";
import katie from "./assets/katie.png";

function About() {
  return (
    <div className="about">
      <div>
        <p>Experience you can trust</p>
        <p className="infop">
          Our team combines experienced recruiters with startup operators who
          have founded, scaled, and excited companies.
        </p>

        <div className="founder_about">
          <div className="founder_images">
            <img className="katie_img" src={katie} alt="katie" />
          </div>
          <div>
          <p>Katie Zucker</p>
          <p className="infop">
            Katie is an experienced HR Leader and Los Angeles based
            Entrepreneur. She brings over 15 years of experience in hiring,
            building teams, and advising on organizational structure for
            companies such as Bridgewater, Adobe, Salesforce, and First
            Quadrant. Katie has helped many companies grow to the next level by
            introducing the right talent at the right time. She also previously
            founded and successfully sold Hey Hero, a Creator monetization
            platform, acquired by Sanctuary Ventures. She is a proud alumna of
            Columbia Business School and Tufts University.
          </p>
          </div>
          </div>
        <div className="founder_about">
          <div className="founder_images">
            <img className="cole_img" src={cole} alt="cole" />
          </div>
          <div>
          <p>Cole Zucker</p>
          <p className="infop">
            Cole is a serial Los Angeles-based entrepreneur with multiple
            successful exits. He is best known for founding GREEN CREATIVE in
            2011, an LED lighting company with HQ’s in Shanghai and San
            Francisco. Fully bootstrapped, Green Creative grew to be one of the
            largest commercial LED lighting companies, before successfully
            exiting to Harbour Group Capital in 2018. Cole has extensive
            experience in scaling up high growth teams. He understands first
            hand the needs of a growing organization, and has hired hundreds of
            employees across the businesses he has built. Cole is an active
            member of YPO and in the Santa Monica Chapter.
          </p>
        </div>
        </div>
        <p>Hire Talent Employer Page</p>
      </div>
    </div>
  );
}

export default About;
