import React from 'react';


const Signup: React.FC = () => (
  <section className="section">
    <div className="container has-text-centered">
      <div className="columns is-centered">
        <div className="column is-5 is-4-desktop">
          <form>
            <div className="field">
              <div className="control">
                <input className="input" type="email" placeholder="Email" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="Name" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input" type="password" placeholder="Password" />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control is-expanded">
                <button className="button is-primary is-fullwidth">Sign up!</button>
              </div>
            </div>
            <p>By signing in you agree with the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Signup;
