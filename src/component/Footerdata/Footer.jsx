import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import MandirImageData from "../../images/mandirImagesData.png"

const Footer = () => {
    return (
        <div className="my-5">
            {/* Google Map Section */}
            <div className="row justify-content-center">
                <div className="col-md-10 text-center">
                    <iframe
                        title="Ram Jarokha Kailash Dham Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.8825797077216!2d73.28554637472652!3d27.980881813375383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fe7dcad1239b7%3A0xda8f8738a837e24d!2sRam%20Jarokha%20Kailash%20Dham!5e1!3m2!1sen!2sin!4v1741887373520!5m2!1sen!2sin"
                        width="120%"
                        height="350"
                        
                        allowFullScreen=""
                        loading="lazy"
                        style={{ border: "0",marginLeft:"-100px",overflow:"hide" }}
                    ></iframe>
                </div>
            </div>

            {/* Contact and Social Media Section */}
            <div className="row text-center mt-4">
                <div className="col-12">
                    <img
                        src={MandirImageData}
                        alt="Temple Logo"
                        className="img-fluid"
                        style={{ height: "80px" }}
                    />
                    <p className="mt-2">&copy; 2022 All Rights Reserved</p>
                    <p className="fw-bold">+91 7568906878, +91 6377459799</p>
                </div>

                {/* Social Media Icons */}
                <div className="col-12">
                    <a href="https://www.facebook.com/mahamandleswarsarjudaasji.mahatyagi.9" target="_blank" className="btn btn-primary mx-2">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://www.instagram.com/mahant_sarjudas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="btn btn-dark mx-2">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="btn btn-info mx-2">
                        <FaTwitter size={20} />
                    </a>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <div className="text-center mt-3">
                <a href="#" className="btn btn-primary">
                    <FaArrowUp size={20} />
                </a>
            </div>
        </div>
    );
};

export default Footer;
