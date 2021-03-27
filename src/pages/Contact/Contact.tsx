import React from 'react';


const Contact: React.FC = () => (
  <section className="section">
    <div className="container py-4">
      <h2 className="title has-text-centered mb-6">Contact our team</h2>
      <div className="columns">
        <div className="column is-6">
          <h4 className="title is-spaced is-4">Let's talk about the future of the internet</h4>
          <p className="subtitle">We're here to answer your questions and discuss the decentralized future of the internet.</p>
          <div>
            <div className="media">
              <div className="media-left"><figure className="image is-24x24"><img src="img/map-marker.svg" alt="" /></figure></div>
              <div className="media-content">
                <div className="content">
                  <p>Company HQ - 1 Silicon Av.</p>
                </div>
              </div>
            </div>
            <div className="media">
              <div className="media-left"><figure className="image is-24x24"><img src="img/phone.svg" alt="" /></figure></div>
              <div className="media-content">
                <div className="content">
                  <p>555-333-555</p>
                </div>
              </div>
            </div>
            <div className="media">
              <div className="media-left"><figure className="image is-24x24"><img src="img/envelope.svg" alt="" /></figure></div>
              <div className="media-content">
                <div className="content">
                  <p>ceo@company.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-5 is-offset-1">
          <form>
            <div className="field">
              <div className="control">
                <input className="input" type="email" placeholder="Email" />
              </div>
            </div>
            <div className="field">
              <div className="control"><textarea className="textarea" rows={5} placeholder="Write something..."></textarea></div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-primary is-fullwidth" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
