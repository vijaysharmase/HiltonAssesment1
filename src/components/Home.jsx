import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavRight,
  Link
} from 'framework7-react';

import person1 from '../images/person_1.jpg';
import person2 from '../images/person_2.jpg';
import person3 from '../images/person_3.jpg';

import image1 from '../images/img_1.jpg';
import image2 from '../images/img_2.jpg';
import image3 from '../images/img_3.jpg';
import image4 from '../images/img_4.jpg';
import image5 from '../images/img_5.jpg';

export default () => (
  <Page>
    <Navbar>
      <NavTitle>Hilton</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right"></Link>
      </NavRight>
    </Navbar>
    <section className="site-hero site-hero-1 overlay">
      <div className="container">
        <div className="row site-hero-inner justify-content-center align-items-center">
          <div className="col-md-10 text-center">
            <h1 className="heading">Welcome to <em>Hilton</em> resort</h1>
            <p className="sub-heading mb-5">Discover our world-class hotel &amp; restaurant resort.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section visit-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="heading">You Can Visit</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 visit mb-3">
            <a href="#"><img src={image1} alt="Review 1" className="img-fluid" /></a>
            <h3><a href="restaurant.html">Food &amp; Wines</a></h3>
            <div className="reviews-star float-left">
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star-half"></span>
              <span className="ion-android-star-outline"></span>
            </div>
            <span className="reviews-count float-right">
              3,239 reviews
              </span>
          </div>
          <div className="col-lg-3 col-md-6 visit mb-3">
            <a href="#"><img src={image2} alt="Review 2" className="img-fluid" /></a>
            <h3><a href="restaurant.html">Resort &amp; Spa</a></h3>
            <div className="reviews-star float-left">
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star-half"></span>
              <span className="ion-android-star-outline"></span>
            </div>
            <span className="reviews-count float-right">
              4,921 reviews
              </span>
          </div>
          <div className="col-lg-3 col-md-6 visit mb-3">
            <a href="hotel.html"><img src={image4} alt="Review 3" className="img-fluid" /></a>
            <h3><a href="hotel.html">Hotel Rooms</a></h3>
            <div className="reviews-star float-left">
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star-outline"></span>
            </div>
            <span className="reviews-count float-right">
              2,112 reviews
            </span>
          </div>
          <div className="col-lg-3 col-md-6 visit mb-3">
            <a href="yacht.html"><img src={image5} alt="Review 4" className="img-fluid" /></a>
            <h3><a href="yacht.html">Yacht Club</a></h3>
            <div className="reviews-star float-left">
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star"></span>
              <span className="ion-android-star-outline"></span>
            </div>
            <span className="reviews-count float-right">
              6,421 reviews
            </span>
          </div>
        </div>
      </div>
    </section>
    <section className="section blog-post-entry bg-pattern">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8">
            <h2 className="heading">Recent Blog Post</h2>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 post">

            <div className="media media-custom d-block mb-4">
              <a href="#" className="mb-4 d-block"><img src={image1} alt="Blog 1" className="img-fluid" /></a>
              <div className="media-body">
                <span className="meta-post">February 26, 2018</span>
                <h2 className="mt-0 mb-3"><a href="#">Five Reasons to Stay at Villa Resort</a></h2>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 post">
            <div className="media media-custom d-block mb-4">
              <a href="#" className="mb-4 d-block"><img src={image2} alt="Blog 2" className="img-fluid" /></a>
              <div className="media-body">
                <span className="meta-post">February 26, 2018</span>
                <h2 className="mt-0 mb-3"><a href="#">Five Reasons to Stay at Villa Resort</a></h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 post">
            <div className="media media-custom d-block mb-4">
              <a href="#" className="mb-4 d-block"><img src={image3} alt="Blog 3" className="img-fluid" /></a>
              <div className="media-body">
                <span className="meta-post">February 26, 2018</span>
                <h2 className="mt-0 mb-3"><a href="#">Five Reasons to Stay at Villa Resort</a></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section testimonial-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8">
            <h2 className="heading">Testimonial</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial text-center">
              <div className="author-image mb-3">
                <img src={person1} alt="Testimonial 1" className="rounded-circle" />
              </div>
              <blockquote>
                <p>&ldquo;Et quidem, impedit eum fugiat excepturi iste aliquid suscipit, tempore, delectus rem soluta voluptatem distinctio sed dolores, magni fugit nemo cum expedita. Totam a accusantium sunt aut autem placeat officia.&rdquo;</p>
              </blockquote>
              <p><em>&mdash; Jean Smith</em></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial text-center">
              <div className="author-image mb-3">
                <img src={person2} alt="Testimonial 2" className="rounded-circle" />
              </div>
              <blockquote>
                <p>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias&rdquo;</p>
              </blockquote>
              <p><em>&mdash; John Doe</em></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial text-center">
              <div className="author-image mb-3">
                <img src={person3} alt="Testimonial 3" className="rounded-circle" />
              </div>
              <blockquote>
                <p>&ldquo;Nostrum, alias, provident magnam sit blanditiis laboriosam unde quaerat, at ipsam, ratione maiores saepe nisi modi corporis quas! Beatae quam, quod aspernatur debitis nesciunt quasi porro ea iste nobis aliquid perspiciatis nostrum culpa impedit aut, iure blanditiis itaque similique sunt!&rdquo;</p>
              </blockquote>
              <p><em>&mdash; John Doe</em></p>
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
