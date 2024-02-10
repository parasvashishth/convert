import React from 'react'

export default function footer() {
  return (
    <footer className="footer">
  <div className="footerTop">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div
            className="copyright"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
          >
            <h4>Copyright</h4>
            <p>
              © Fastserv © <span id="currentYear" />. <br />
              All Rights Reserved.
            </p>
            <p>
              Powered by <a href="https://digitalbirbal.com/">Digital Birbal</a>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="copyright"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h4>Contact</h4>
            <p>6/9A, Tilak Nagar, New Delhi - 110018</p>
            <p>
              <a href="mailto:fastservevents@gmail.com" target="_blank">
                fastservevents@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+91 895 895 895 3">+91 895 895 895 3</a>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="copyright"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
          >
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/fastservevents?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fastserv-events-a05528283"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/fastservevents?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@FastServEvents?si=44F99qG8ETjuRypy"
                  target="_blank"
                >
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footerLast">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-sm-12">
          <div
            className="lastText"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
          >
            <p>Let's talk about your wedding</p>
            <a
              href="https://fastservevents.com/contact/"
              className="footButton"
            >
              Book Wedding Planner
            </a>
          </div>
        </div>
        <div className="col-md-5 col-sm-12">
          <div
            className="footerBtn"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
          >
            <a href="https://fastservevents.com/privacy-policy/">
              Privacy Policy{" "}
            </a>
            {/*                         <a href="#" class="footButton">Tweet</a> */}
            {/*                         <a href="https://www.facebook.com/fastservevents?mibextid=LQQJ4d" target="_blank" class="footButton">Share Via FB</a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}
