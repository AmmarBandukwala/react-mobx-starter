import React from 'react';

const Dashboard: React.FC = () => (
  <section className="section">
    <div className="container">
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Total Compute</p>
            <p className="title">1000 Cores</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Total Storage</p>
            <p className="title">2000 TB</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Total # of Instances</p>
            <p className="title">456K</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Uptime</p>
            <p className="title">99.985%</p>
          </div>
        </div>
      </nav>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Vertical...</p>
                <p className="subtitle">Top tile</p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">...tiles</p>
                <p className="subtitle">Bottom tile</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Tall tile</p>
              <p className="subtitle">With even more content</p>
              <div className="content">
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div className="container has-text-centered py-4">
      <div className="columns is-multiline is-centered">
        <div className="column is-8 is-4-widescreen mb-5">
          <div className="block"><img src="img/three.svg" alt="" style={{ width: "50%", height: "50%" }} /></div>
          <h4 className="title"><small className="number">1</small> Move Data</h4>
          <p>Using our Piper Assistant application, you can move your data to be stored our decentralized network with simple drag &amp; drop.</p>
        </div>
        <div className="column is-8 is-4-widescreen mb-5">
          <div className="block"><img src="img/three.svg" alt="" style={{ width: "50%", height: "50%" }} /></div>
          <h4 className="title"><small className="number">2</small> Integrate Software</h4>
          <p>We want to make sure that you can keep using the software that you use to manage your business.</p>
        </div>
        <div className="column is-8 is-4-widescreen mb-5">
          <div className="block"><img src="img/three.svg" alt="" style={{ width: "50%", height: "50%" }} /></div>
          <h4 className="title"><small className="number">3</small> Ongoing Support</h4>
          <p>As with all innovative technologies, sometimes unpredictable things will happen, and you can always count on our support to solve issues for&nbsp;you.</p>
        </div>
      </div>
      <div className="buttons is-centered"><a className="button is-primary" href="#">Learn more</a></div>
    </div>
  </section>
);

export default Dashboard;
