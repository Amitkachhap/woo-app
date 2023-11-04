import React from 'react';

const About = () => {
  return (
    <div>
      <body className="animsition">
        {/* Header */}
        <header className="header-v4">
          <div className="container-menu-desktop">
            {/* Topbar */}
            {/* ... (Topbar content) */}
          </div>

          {/* Header desktop */}
          <div className="wrap-menu-desktop how-shadow1">
            <nav className="limiter-menu-desktop container">
              <a href="#" className="logo">
                <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
              </a>
              {/* ... (Menu content) */}
            </nav>
          </div>
        </header>

        {/* Header Mobile */}
        {/* ... (Header Mobile content) */}

        {/* Menu Mobile */}
        {/* ... (Menu Mobile content) */}

        {/* Modal Search */}
        {/* ... (Modal Search content) */}
      </body>

      {/* Cart */}
      {/* ... (Cart content) */}

      {/* Title page */}
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <h2 className="ltext-105 cl0 txt-center">About</h2>
      </section>

      {/* Content page */}
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">Our Story</h3>
                <p className="stext-113 cl6 p-b-26">
                  {/* Your story content */}
                </p>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div className="how-bor1">
                <div className="hov-img0">
                  <img src="images/about-01.jpg" alt="IMG" />
                </div>
              </div>
            </div>
          </div>
          {/* ... (More content) */}
        </div>
      </section>

      {/* Footer */}
      {/* ... (Footer content) */}
    </div>
  );
};

export default About;
