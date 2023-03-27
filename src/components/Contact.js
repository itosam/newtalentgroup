function Contact() {
  return (
    <div className="contact">
      <div className="hiresection">
        <p>
          Hiring the best people is your most important task. We’re here to
          help.
        </p>
        <button className="button2">Get in touch</button>
      </div>
      <div className="contactform">
        <p>Build your team with New Talent Group</p>
        <p className="infop">
          Let's connect! We look forward to learning about the growth of your
          business.
        </p>
        <form>
          <column>
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
          </column>
          <column>
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
          <textarea
            name="message"
            placeholder="Tell Us More!"
            rows="1"
          />
          <br />
          </column>
          <button className="button1">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
