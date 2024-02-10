import React from 'react'

export default function Header() {
  return (
    <header className="header">
    <div className="headerTop">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-7">
            <div className="headerTopCont headerTopCont1">
              <i className="fas fa-map-marker-alt" />
              <p>6/9A, Tilak Nagar, New Delhi - 110018</p>
            </div>
          </div>
          <div className="col-md-6 col-5">
            <div className="headerTopCont headerTopConRt">
              <i className="fas fa-phone-alt" />
              <p>
                <a href="tel:+91 895 895 895 3">+91 895 895 895 3</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="headerBottom">
      <nav id="navigation1" className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="headerFastMenu">
                <div className="logoNew">
                  <a
                    href="https://fastservevents.com/"
                    style={{
                      backgroundImage:
                        "url(https://fastservevents.com/wp-content/themes/fastserv/assets/images/ellipse.png)"
                    }}
                  >
                    <img
                      src="https://fastservevents.com/wp-content/uploads/2023/09/fastservlogo.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="nav-toggle" />
                <div className="nav-menus-wrapper">
                  <ul className="nav-menu">
                    <li>
                      <a href="https://fastservevents.com/">HOME</a>
                    </li>
                    <li>
                      <a href="https://fastservevents.com/about/">ABOUT</a>
                    </li>
                    <li className="service_nav_link">
                      <a href="https://fastservevents.com/services/">
                        SERVICES
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="https://fastservevents.com/service/pre-wedding-services/">
                            Pre-Wedding Services
                          </a>
                        </li>
                        <li>
                          <a href="https://fastservevents.com/service/wedding-planning/">
                            Wedding Planning
                          </a>
                        </li>
                        <li>
                          <a href="https://fastservevents.com/service/wedding-entertainment-and-glam/">
                            Wedding Entertainment and Glam
                          </a>
                        </li>
                        <li>
                          <a href="https://fastservevents.com/service/post-wedding-services/">
                            Post Wedding Services
                          </a>
                        </li>
                        <li>
                          <a href="https://fastservevents.com/service/corporate-events/">
                            Corporate Events
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="fastserv-logo">
                      <a
                        href="https://fastservevents.com/"
                        style={{
                          backgroundImage:
                            "url(https://fastservevents.com/wp-content/themes/fastserv/assets/images/ellipse.png)"
                        }}
                      >
                        <img
                          src="https://fastservevents.com/wp-content/uploads/2023/09/fastservlogo.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://fastservevents.com/gallery/">GALLERY</a>
                    </li>
                    <li>
                      <a href="https://fastservevents.com/blog/">BLOG</a>
                    </li>
                    <li>
                      <a href="https://fastservevents.com/contact/">CONTACT</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>

  )
}
