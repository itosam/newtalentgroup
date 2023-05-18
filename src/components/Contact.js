function Contact() {
  return (
    <div className="contact">
      <div className="hiresection">
        <p style={{ fontSize: "3rem" }}>
          Hiring the best people is your most important task. We’re here to
          help.
        </p>
        <button className="button2">Get in touch</button>
      </div>
      <div className="contactform">
        <div className="row">
          <div className="column">
            <p style={{ fontSize: "3rem" }}>
              Build your team with <br/>
              New Talent Group</p>
           
          </div>
          <div className="column">
            <p
              className="infop"
              style={{
                fontSize: "large",
                paddingLeft: "8rem",
                paddingRigh: "0",
              }}
            >
              Let's connect! We look forward to learning about the growth of
              your business.
            </p>
          </div>
        </div>

        <form>
          <div class="row">
            <div class="column">
              <input
                type="text"
                placeholder="Contact Name"
                aria-label="contact name"
              />
              <br />
              <input
                type="text"
                placeholder="Company Name"
                aria-label="company name"
              />
              <br />
              <input type="text" placeholder="Industry" aria-label="industry" />
              <br />
            </div>
            <div class="column">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                required
              />
              <br />
              <input
                type="text"
                name="Phone Number"
                placeholder="Phone Number"
              />
              <br />
              <input name="message" placeholder="Tell Us More!" rows="1" />
              <br />
            </div>
          </div>
        </form>
        <button className="button1" style={{marginTop:'20px'}}>
        Submit
      </button>
      </div>

    </div>
  );
}

export default Contact;
