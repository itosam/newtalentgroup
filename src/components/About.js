import cole from "./assets/cole.png";
import katie from "./assets/katie.png";

function About() {
  return (
    <div id="about" className="about">
      <div className="founders">
        <p style={{paddingBottom:'50px'}}>
          Experience you <em>can trust</em>
        </p>
        <p className="infoteam" style={{paddingBottom:'50px'}}>
          Our team combines experienced recruiters with startup operators who
          have founded, scaled, and excited companies.
        </p>

        <div className="founder_aboutk">
          <div className="founder_images">
            <img className="katie_img" src={katie} alt="katie" />
          </div>
          <div className="founder_info">
            <p
              style={{
                fontFamily: "Playfair Display",
                fontSize: "3rem",
                fontWeight: 100,
              }}
            >
              Katie Zucker
            </p>
            <p>
              Katie is an experienced HR Leader and Los Angeles based
              Entrepreneur. She brings over 15 years of experience in hiring,
              building teams, and advising on organizational structure for
              companies such as Bridgewater, Adobe, Salesforce, and First
              Quadrant.
              <br />
              <br />
              Katie has helped many companies grow to the next level by
              introducing the right talent at the right time.
              <br />
              <br />
              She also previously founded and successfully sold Hey Hero, a
              Creator monetization platform, acquired by Sanctuary Ventures.
              <br />
              <br />
              She is a proud alumna of Columbia Business School and Tufts
              University.
            </p>
          </div>
        </div>
        <div className="founder_aboutc">
          <div className="founder_images">
            <img className="cole_img" src={cole} alt="cole" />
          </div>
          <div className="founder_info">
            <p
              style={{
                fontFamily: "Playfair Display",
                fontSize: "3rem",
                fontWeight: 100,
              }}
            >
              Cole Zucker
            </p>
            <p>
              Cole is a serial Los Angeles-based entrepreneur with multiple
              successful exits. He is best known for founding GREEN CREATIVE in
              2011, an LED lighting company with HQ’s in Shanghai and San
              Francisco. Fully bootstrapped, Green Creative grew to be one of
              the largest commercial LED lighting companies, before successfully
              exiting to Harbour Group Capital in 2018.
              <br />
              <br />
              Cole has extensive experience in scaling up high growth teams. He
              understands first hand the needs of a growing organization, and
              has hired hundreds of employees across the businesses he has
              built.
              <br />
              <br />
              Cole is an active member of YPO and in the Santa Monica Chapter.
            </p>
          </div>
        </div>
        <p>Hire Talent Employer Page</p>
      </div>
    </div>
  );
}

export default About;
