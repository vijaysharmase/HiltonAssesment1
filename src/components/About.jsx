import React from 'react';
import { Page, Navbar, NavLeft, NavTitle, NavRight, Link } from 'framework7-react';

export default () => (
  <Page className="about">
    <Navbar>
      <NavLeft backLink="Back"></NavLeft>
      <NavTitle>About</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right"></Link>
      </NavRight>
    </Navbar>
    <section className="section hotel-image">
      <div className="container">
        <div className="row white-padding">
          <div className="bg-hotelexterior"></div>
        </div>
      </div>
    </section>
    <section className="section hotel-name">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8">
            <h2 className="heading">About</h2>
            <p className="lead">Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
            <p className="lead">Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
          </div>
        </div>
      </div>
    </section>
    <footer className="section footer-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4 mb-5">
            <ul className="list-unstyled link">
              <li><a href="/hotel/">Hotel</a></li>
              <li><a href="#">Rooms</a></li>
              <li><a href="/about/">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-5 pr-md-5 contact-info">
            <p><span className="d-block">Address:</span> <span> 98 West 21th Street, Suite 721 New York NY 10016</span></p>
            <p><span className="d-block">Phone:</span> <span> (+1) 435 3533</span></p>
            <p><span className="d-block">Email:</span> <span> info@yourdomain.com</span></p>
          </div>
          <div className="col-md-4 mb-5">
            <p>Sign up for our newsletter</p>
            <form action="#" className="footer-newsletter">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your email..." />
                <button type="submit" className="btn"><span className="fa fa-paper-plane"></span></button>
              </div>
            </form>
          </div>
        </div>
        <div className="row bordertop pt-5">
          <p className="col-md-6 text-left">
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</p>
          <p className="col-md-6 text-right social">
            <a href="#"><span className="fa fa-tripadvisor"></span></a>
            <a href="#"><span className="fa fa-facebook"></span></a>
            <a href="#"><span className="fa fa-twitter"></span></a>
          </p>
        </div>
      </div>
    </footer>
  </Page>
);
