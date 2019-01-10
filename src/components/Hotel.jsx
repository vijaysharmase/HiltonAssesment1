import React from 'react';
import {
  Page,
  Block,
  Icon,
  Row,
  Col,
  AccordionContent,
  List,
  ListItem,
  Navbar,
  NavTitle,
  NavLeft,
  NavRight,
  Link,
  Swiper,
  SwiperSlide
} from 'framework7-react';

import slider1 from '../images/slider-1.jpg';
import slider2 from '../images/slider-2.jpg';
import slider3 from '../images/slider-3.jpg';
import slider4 from '../images/slider-4.jpg';
import slider5 from '../images/slider-5.jpg';
import slider6 from '../images/slider-6.jpg';

export default () => (
  <Page className="hotel">
    <Navbar>
      <NavLeft backLink="Back"></NavLeft>
      <NavTitle>Hotel Details</NavTitle>
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
            <h2 className="heading">Hilton Chicago</h2>
            <p className="lead">720 South Michigan Avenue</p>
            <p className="lead">Chicago, Illinois, 60605</p>
            <p className="lead"><a>1-312-922-4400</a></p>
          </div>
        </div>
      </div>
    </section>
    <section className="section hotel-details">
      <div className="container">
        <List accordionList inset>
          <ListItem accordionItem title="Map">
            <AccordionContent>
              <iframe id="gmap_canvas" title="Google Map" className="gmap_canvas" src="https://maps.google.com/maps?q=Hilton%20Chicago%20720%20South%20Michigan%20Avenue%20%20Chicago%2C%20Illinois%2C%2060605&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title="Photo Gallery">
            <AccordionContent>
              <Swiper className="hotel-gallery-swiper" pagination navigation params={{ loop: true }}>
                <SwiperSlide>
                  <img alt="Slide 1" src={slider1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img alt="Slide 2" src={slider2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img alt="Slide 3" src={slider3} />
                </SwiperSlide>
                <SwiperSlide>
                  <img alt="Slide 4" src={slider4} />
                </SwiperSlide>
                <SwiperSlide>
                  <img alt="Slide 5" src={slider5} />
                </SwiperSlide>
                <SwiperSlide>
                  <img alt="Slide 6" src={slider6} />
                </SwiperSlide>
              </Swiper>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title="Amenities">
            <AccordionContent>
              <Block>
                <Row>
                  <Col><Icon fa="cutlery"></Icon> Complimentary Breakfast</Col>
                  <Col><Icon fa="wifi"></Icon> Wireless Internet</Col>
                </Row>
                <Row>
                  <Col><Icon fa="bath"></Icon> Towels</Col>
                  <Col><Icon fa="car"></Icon> Parking</Col>
                </Row>
                <Row>
                  <Col><Icon fa="user-o"></Icon> Housekeeping</Col>
                  <Col><Icon fa="check"></Icon> Laundry</Col>
                </Row>
                <Row>
                  <Col><Icon fa="bath"></Icon> Toiletries</Col>
                  <Col><Icon fa="television"></Icon> Television Set</Col>
                </Row>
                <Row>
                  <Col><Icon fa="check"></Icon> Swimming Pool</Col>
                  <Col><Icon fa="snowflake-o"></Icon> Refrigerator</Col>
                </Row>
                <Row>
                  <Col><Icon fa="check"></Icon> Early Check-in</Col>
                  <Col><Icon fa="cutlery"></Icon> Restaurant</Col>
                </Row>
                <Row>
                  <Col><Icon fa="bed"></Icon> Room Service</Col>
                  <Col><Icon fa="taxi"></Icon> Transport Facility</Col>
                </Row>
              </Block>
            </AccordionContent>
          </ListItem>
        </List>
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
