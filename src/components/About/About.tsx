import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./About.css";

const About = () => {
  return (
    <div className="w-100">
      <div className="about1 p-5">
        <h3 className="text-center mb-3">Fur-shop ...</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
          libero nibh. Vestibulum vitae nulla quam. Praesent blandit felis
          vestibulum dui malesuada luctus eget vitae quam. Aliquam erat volutpat.
          Duis mollis libero non pretium tincidunt. Etiam pulvinar massa diam, at
          mattis ipsum ultricies sit amet. Proin et feugiat lorem. Donec at sem
          finibus, molestie nibh id, suscipit arcu. <br />
          Nullam eget dui ligula. Aenean blandit bibendum erat, quis consectetur
          ligula tempor vel. Fusce tempus urna ex, rhoncus maximus turpis
          scelerisque sit amet. Nunc euismod, dui quis tristique aliquam, mauris
          augue aliquet sem, vel tristique metus mi cursus turpis. Nulla facilisi.
          Suspendisse potenti. Ut eget suscipit nisl. Ut interdum felis vitae
          sodales maximus. Proin hendrerit nisl volutpat urna tincidunt, sit amet
          ultrices ligula gravida. <br />
          Suspendisse potenti. Donec justo urna, pretium sed odio sit amet, rutrum
          interdum libero. Nullam leo metus, eleifend et mollis non, efficitur
          ultrices nisl. Vestibulum tincidunt vestibulum est, non malesuada nibh
          tristique eget. Morbi convallis dolor ac eros convallis accumsan. Mauris
          semper egestas felis et ornare. Vestibulum tincidunt nec leo in feugiat.
          Duis sagittis nisi tellus, nec maximus mi convallis eget. Pellentesque
          eros lorem, interdum non ullamcorper nec, posuere id nibh. Fusce eu
          lobortis lorem, sed egestas sem. Duis viverra porta erat, et blandit
          augue pulvinar at. <br />
        </div>
      </div>

      <div className="px-2 py-5 message">
        <div id="contact">
          <div className="container ">

            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="text-white">Get in Touch</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <form name="sentMessage" id="contactForm" >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-4">
                        <input type="text" className="form-control" required placeholder="Your Name *" id="name" />

                      </div>

                      <div className="form-group  mb-4">
                        <input type="email" className="form-control" required placeholder="Your Email *" id="email" />

                      </div>

                      <div className="form-group  mb-4">
                        <input type="tel" className="form-control" required placeholder="Your Phone *" id="phone" />

                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea className="form-control py-2 px-3" required placeholder="Your Message *" rows={6} id="message" ></textarea>

                      </div>
                    </div>

                    <div className="col-lg-12 text-center mt-3">
                      <button type="submit" className="btn btn-info">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.94583109359!2d105.80194392473273!3d21.022816135798717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1659604888924!5m2!1svi!2s" width="600" height="450" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  );
};

export default About;
