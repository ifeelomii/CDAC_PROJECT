import "./FeedbackForm.css";
const FeedbackForm = () => {
  return (
    <>
      <section className="section section-contact">
        <div className="container form-container">
          <h2 className="feedback-txt">Feedback</h2>
          <p className="feedback-txt">Your feedback is valuable for us... </p>
        </div>

        <div className="contact-container-outer">
          <div className="section-contact-main contact-container-inner">
            <form action="#">
              <ul className="form-style-1">
                <li>
                  <label>
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="field1"
                    className="field-divided"
                    placeholder="First"
                  />{" "}
                  <input
                    type="text"
                    name="field2"
                    className="field-divided"
                    placeholder="Last"
                  />
                </li>
                <li>
                  <label>
                    Email <span className="required">*</span>
                  </label>
                  <input type="email" name="field3" className="field-long" />
                </li>
                <li>
                  <label>Subject</label>
                  <input type="text" className="field-select" />
                </li>
                <li>
                  <label>
                    Your Message <span className="required">*</span>
                  </label>
                  <textarea
                    name="field5"
                    id="field5"
                    className="field-long field-textarea"
                  ></textarea>
                </li>
                <li>
                  <button className="btn btn-primary" id="fb-sbt-btn">
                    Submit Feedback
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeedbackForm;
