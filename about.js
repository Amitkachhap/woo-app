import Head from 'next/head';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      {/* Header section */}
      <header className="header-v4">
        {/* Header content */}
      </header>

      {/* Title section */}
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
        <h2 className="ltext-105 cl0 txt-center">
          About
        </h2>
      </section>

      {/* Content section */}
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          {/* About section */}
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">
                  Our Story
                </h3>
                <p className="stext-113 cl6 p-b-26">
                  {/* Your story content goes here */}
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

          {/* Mission section */}
          <div className="row">
            <div className="col-md-7 col-lg-8 p-b-30">
              <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 className="mtext-111 cl2 p-b-16">
                  Our Mission
                </h3>
                <p className="stext-113 cl6 p-b-26">
                  {/* Your mission content goes here */}
                </p>
              </div>
            </div>
            <div className="col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <div className="how-bor2">
                <div className="hov-img0">
                  <img src="images/about-02.jpg" alt="IMG" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="bg3 p-t-75 p-b-32">
        <div className="container">
          {/* Footer content */}
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
