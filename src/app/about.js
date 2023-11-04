export const Foo = () => (
  <>
    {/* Header */}
    <header className="header-v4">
      {/* Header desktop */}
      <div className="container-menu-desktop">
        {/* Topbar */}
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">
              Free shipping for standard orders over $100
            </div>
            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                Help & FAQs
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                My Account
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                EN
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                USD
              </a>
            </div>
          </div>
        </div>
        {/* The rest of your header content */}
        {/* ... */}
      </div>
      {/* Header Mobile */}
      <div className="wrap-header-mobile">
        {/* Logo mobile */}
        <div className="logo-mobile">
          <a href="#">
            <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
          </a>
        </div>
        {/* The rest of your mobile header content */}
        {/* ... */}
      </div>
      {/* The rest of your header */}
      {/* ... */}
    </header>
    {/* The rest of your content */}
    {/* ... */}
  </>
);
