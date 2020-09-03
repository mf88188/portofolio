import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Faizan Aslam'
  const siteDescription = 'Professional Architectural 3D Visualization'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Architectural 3D visualization</h2>
          </header>
          <p>
            I am working on architectural and interior design industry with over
            4 years.I have professional experience with AutoCAD ,3ds Max,Sketch
            up,Corona, V-ray and Adobe Photoshop.I can create a high quality 2D&
            3D model of the Landscape Design of your space.As an experienced
            architectural designer for private residences. residential,
            commercial, interior design and landscaping via 2d CAD and 3d
            visualization
          </p>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            100% Client satisfactory work at an affordable price and in quick
            time.
            <li>✔ Unlimited revisions</li>
            <li>✔ Make sure you are 100% satisfied with the job</li>
            <li>✔ 100% refund guarantee if you don't satisfied.</li>
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form
                method="post"
                name="contact"
                method="POST"
                data-netlify="true"
              >
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Sargodha
                  <br />
                  Pakistan
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  03096175822
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">mf88188@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
