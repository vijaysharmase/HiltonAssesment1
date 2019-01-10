import React from 'react';
import { Page, Navbar, NavLeft, NavTitle, NavRight, Link } from 'framework7-react';

export default () => (
  <Page className="contact">
    <Navbar>
      <NavLeft backLink="Back"></NavLeft>
      <NavTitle>Contact</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right"></Link>
      </NavRight>
    </Navbar>
    <section className="section hotel-name">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8">
            <h3 className="heading">Get in touch with us.</h3>
          </div>
        </div>
      </div>
    </section>
    <section className="section contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <form action="#" method="post" className="bg-white p-md-5 p-4 mb-5" style={{marginTop: '-150px'}}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control " />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" className="form-control " />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control " />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="message">Write Message</label>
                  <textarea name="message" id="message" className="form-control " cols="30" rows="8"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="submit" value="Send Message" className="btn btn-primary" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-10 ml-auto contact-info">
                <p><span className="d-block">Address:</span> <span> 98 West 21th Street, Suite 721 New York NY 10016</span></p>
                <p><span className="d-block">Phone:</span> <span> (+1) 435 3533</span></p>
                <p><span className="d-block">Email:</span> <span> info@yourdomain.com</span></p>
              </div>
            </div>
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
