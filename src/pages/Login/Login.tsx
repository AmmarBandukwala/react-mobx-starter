import React from 'react';


const Login: React.FC = () => (
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
                <input className="input" type="password" placeholder="Password" />
              </div>
            </div>
            <div className="field">
              <button className="button is-primary is-fullwidth">Sign in!</button>
            </div>
            <a href="#">or sign in with Apple, Google, Facebook, or Microsoft</a>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Login;
